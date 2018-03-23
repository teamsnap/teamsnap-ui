/**
 * @name StepNav
 *
 * @description
 *  A component to render a 'wizard' like StepNav. This uses the <TextLink /> component for the nav links.
 *    See the Teamsnap patterns library for more information.  https://teamsnap-ui-patterns.netlify.com/patterns/components/step-nav.html
 *
 * @example
 *  <StepNav
 *    title='Test Title'
 *    steps={[
 *      { name: 'Step One', icon: 'home', linkProps: { onClick: (e) => { e.preventDefault(); console.warn('STEP 1 Click')}} },
 *      { name: 'Step Two', icon: 'roster', linkProps: { location: '/some-link-href' } },
 *      { name: 'Step Four', icon: 'messages' }
 *    ]} />
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import TextLink from '../TextLink'
import { getClassName } from '../../utils/helpers'

class StepNav extends PureComponent {
  renderTitle = () => {
    const { title } = this.props

    return (
      <div className="StepNav-title">
        <h2 className="StepNav-titleText">{ title }</h2>
      </div>
    )
  }

  renderStep = ({ name, icon, isActive, linkProps }) => {
    const stepClasses = getClassName(
      'StepNav-step',
      linkProps && 'is-enabled',
      linkProps && isActive && 'is-active'
    )

    const LinkTag = linkProps ? TextLink : 'span'

    return (
      <li key={ name } className={ stepClasses }>
        <LinkTag className="StepNav-stepLink" { ...linkProps }>
          <Icon name={ icon } mods="StepNav-stepIcon" />
          <span className="StepNav-stepTitle">{ name }</span>
        </LinkTag>
      </li>
    )
  }

  render() {
    const { steps, title, isSmall, className, mods, style } = this.props

    const stepNavClass = getClassName(
      className,
      title && 'StepNav--titled',
      isSmall && 'StepNav--small',
      mods
    )

    return (
      <div className={ stepNavClass } style={ style }>
        { title && this.renderTitle() }

        <ul className="StepNav-steps">
          { steps.map(step => this.renderStep(step)) }
        </ul>
      </div>
    )
  }
}

StepNav.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
      linkProps: PropTypes.object
    })
  ).isRequired,
  title: PropTypes.string,
  isSmall: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

StepNav.defaultProps = {
  title: null,
  isSmall: false,
  className: 'StepNav',
  mods: null,
  style: {}
}

export default StepNav
