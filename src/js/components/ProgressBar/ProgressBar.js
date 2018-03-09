import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { _merge } from 'utils/helpers'

// TODO: Need to figure out best way to add 'Radial' progress bar
//  - Also need to figure out how the rotate (deg) calculation should work?
const baseAttributes = {
  ProgressBar: { className: 'ProgressBar' },
  ProgressBarTitle: { className: 'ProgressBar-title' },
  ProgressBarRange: { className: 'ProgressBar-range' },
  ProgressBarStatus: { className: 'ProgressBar-status' }
}

// Make an easier API, with attributes that spread and overwrite the base stuff.

class ProgressBar extends PureComponent {
  renderTitle = (attrs) => {
    const { title } = this.props
    return title ? <p { ...attrs.ProgressBarTitle }>{ title }</p> : null
  }

  render () {
    const { title, width, attributes } = this.props

    const customAttributes = { ProgressBarStatus: { style: { width } } }
    const attrs = _merge(baseAttributes, customAttributes, attributes)

    return (
      <div { ...attrs.ProgressBar }>
        { this.renderTitle(attrs) }
        <div { ...attrs.ProgressBarRange }>
          <div { ...attrs.ProgressBarStatus } />
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  attributes: PropTypes.object
}

ProgressBar.defaultProps = {
  title: null,
  width: '0',
  attributes: {}
}

export default ProgressBar
