/**
 * @name SummaryList
 *
 * @description
 *  A component to render a 'dot' separated list of items.  See the Teamsnap patterns library for more information.
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/summary-list.html
 *
 * @example
 *  <SummaryList
 *    heading='Example Header'
 *    items={[
 *      { description: 'Item One', value: '$75.00' },
 *      { description: 'Item Two', value: '$100.00', isFooterRow: true },
 *    ]}
 *    footer={ {description: 'Balance', '$175.00'} }/>
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class SummaryList extends PureComponent {
  renderColumn = (value) => <span>{ value }</span>

  renderHeading = () => {
    const { heading, subHeading } = this.props

    return (
      <h3 className='SummaryList-heading'>
        { this.renderColumn(heading) }
        { subHeading && this.renderColumn(subHeading) }
      </h3>
    )
  }

  renderItem = (item) => {
    const listClasses = getClassName(
      'SummaryList-item',
      item.isFooterRow && 'SummaryList-item--footer',
      item.mods
    )

    return (
      <li key={ item.key || item.description } className={ listClasses } style={ item.style }>
        { this.renderColumn(item.description) }
        { this.renderColumn(item.value) }
      </li>
    )
  }

  render () {
    const { items, heading, subHeading, footer, className, mods, style, otherProps } = this.props

    const hasHeading = heading || subHeading

    const summaryClasses = getClassName(
      className,
      !hasHeading && 'SummaryList--no-heading',
      mods
    )

    return (
      <div className={ summaryClasses } style={ style } { ...otherProps }>
        { hasHeading && this.renderHeading() }

        <ul className='SummaryList-section'>
          { items.map(this.renderItem) }
        </ul>
        { footer &&
          <div className='SummaryList-footer'>
            <h3>{ footer.description }<span>{ footer.value }</span></h3>
          </div>
        }
      </div>
    )
  }
}

SummaryList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.node.isRequired,
      value: PropTypes.node.isRequired,
      key: PropTypes.string,
      mods: PropTypes.string,
      style: PropTypes.object
    })
  ).isRequired,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  footer: PropTypes.object,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

SummaryList.defaultProps = {
  heading: null,
  subHeading: null,
  footer: null,
  className: 'SummaryList',
  mods: null,
  style: {},
  otherProps: {}
}

export default SummaryList
