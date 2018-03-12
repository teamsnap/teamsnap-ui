import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../Field'

class Input extends PureComponent {
  render () {
    const { name, type, label, errorMessage, children, className, style, inputProps, ...otherProps } = this.props

    return (
      <Field name={ name } label={ label } errorMessage={ errorMessage }>
        <div className={ className } style={ style } { ...otherProps }>
          <input name={ name } type={ type } { ...inputProps } />
          { children && <span className='InputGroup-icon'>{ children }</span> }
        </div>
      </Field>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  inputProps: PropTypes.object,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

Input.defaultProps = {
  type: 'text',
  label: null,
  children: null,
  inputProps: {},
  errorMessage: null,
  className: 'InputGroup',
  style: {}
}

export default Input
