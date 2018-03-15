import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Field extends PureComponent {
  renderSuccess = () => (
    <span className='FormGroup-validation'>
      <Icon name='check' />
    </span>
  )

  render () {
    const { children, status, className, mods, style } = this.props

    const fieldClasses = getClassName(
      className,
      status === 'error' && 'is-notValid',
      status === 'success' && 'is-valid',
      mods
    )

    return (
      <div className={ fieldClasses } style={ style }>
        { status === 'success' && this.renderSuccess() }
        { children }
      </div>
    )
  }
}

Field.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.oneOf([null, 'success', 'error']),
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Field.defaultProps = {
  status: null,
  className: 'FormGroup',
  mods: null,
  style: {}
}

export default Field
