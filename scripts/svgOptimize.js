const fs = require('fs-extra')
const glob = require('glob')
const path = require('path')
const SVGO = require('svgo')
const config = require('./config')

// Get the icon Name from file
const getName = (filepath) => path.basename(filepath, path.extname(filepath))

const svgAttributes = (data) => {
  const attributes = {}
  const element = data.slice(5, data.indexOf('>') + 1)

  // Crude attempt to parse svg html attributes into an object
  element.split('" ').map(t => {
    const tmp = t.replace(/"|"|>/g,'').split('=')
    attributes[tmp[0]] = tmp[1]
  })

  return attributes
}

// Initialize SVG Optimizer with options
const svgo = new SVGO({})

const svgOptimize = (globPattern, callback) => {
  const svgIcons = []
  const files = glob.sync(globPattern)

  // console.log('FILES', files)
  // console.log('GLOB PATTERN', globPattern)

  // Map over each files getting the path and name.
  files.map((filepath) => {
    const name = getName(filepath)

    // Read file contents and pass to svg optimizer
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) throw err      
      console.log(`Optimizing Icon ${filepath} -> ${config.icons.dest}/${name}.js`)

      svgo.optimize(data, { path: filepath }).then(result => {
        // Attempt to parse HTML attributes from svg element
        const attributes = svgAttributes(result.data)

        // Set svgIcon data object
        svgIcons.push({
          metadata: { ...attributes, name },
          source: result.data
        })

        // Fire callback once promise chain is complete
        if (svgIcons.length === files.length) callback(svgIcons)

      }).catch((error) => {
        console.error('Error', error)
      })
    })
  })
}

module.exports = svgOptimize
