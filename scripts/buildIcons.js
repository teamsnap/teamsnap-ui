const del = require('del')
const fs = require('fs-extra')
const path = require('path')
const svgOptimize = require('./svgOptimize')
const config = require('./config')

// Returns svg content between SVG tags
const getSVGContent = (source) => source.slice(source.indexOf('>') + 1).slice(0, -6)

// Create object for exporting icon modules
const createIconModule = (svgs) => svgs.map((svg) => {
  const source = getSVGContent(svg.source)
  const json = JSON.stringify({ ...svg, source })

  return {
    filepath: `${svg.metadata.name}.js`,
    source: `module.exports = ${json}`
  }
})

// Build svgIcon modules from svg asset files
const buildIcons = (svgIcons) => {
  // console.log('Building Icons to: ', config.icons.dest)

  const iconModules = createIconModule(svgIcons)

  // Destroy build directory from previous builds
  del.sync(config.icons.dest)

  // Write JS files to build directory
  iconModules.map((module) =>
    fs.outputFile(path.join(config.icons.dest, module.filepath), module.source)
  )

  // Write JS files to src directory
  iconModules.map((module) =>
    fs.outputFile(path.join(config.icons.destLocal, module.filepath), module.source)
  )
}

svgOptimize(config.icons.src, buildIcons)
