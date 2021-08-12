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

import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Icon } from '../Icon';
import { TextLink } from '../TextLink';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
      linkProps: PropTypes.object,
    })
  ).isRequired,
  title: PropTypes.string,
  isSmall: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes> | any;

const StepNav = ({ steps, title, isSmall, className, mods, style, otherProps }: Props) => {
  const renderTitle = () => {
    return (
      <div className="StepNav-title">
        <h2 className="StepNav-titleText">{title}</h2>
      </div>
    );
  };

  const renderStep = (step) => {
    const { name, icon, isActive, linkProps } = step;
    const stepClasses = getClassName(
      'StepNav-step',
      linkProps && 'is-enabled',
      linkProps && isActive && 'is-active'
    );

    const LinkTag = linkProps ? TextLink : 'span';

    return (
      <li key={name} className={stepClasses}>
        <LinkTag className="StepNav-stepLink" {...linkProps}>
          <Icon name={icon} mods="StepNav-stepIcon" />
          <span className="StepNav-stepTitle">{name}</span>
        </LinkTag>
      </li>
    );
  };

  const stepNavClass = getClassName(
    className,
    title && 'StepNav--titled',
    isSmall && 'StepNav--small',
    mods
  );

  return (
    <div className={stepNavClass} style={style} {...otherProps}>
      {title && renderTitle()}

      <ul className="StepNav-steps">{steps.map((step) => renderStep(step))}</ul>
    </div>
  );
};

StepNav.defaultProps = {
  title: null,
  isSmall: false,
  className: 'StepNav',
  mods: null,
  style: {},
  otherProps: {},
};

export default StepNav;
