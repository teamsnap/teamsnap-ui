/**
 * @name PanelHeader
 *
 * @description
 *  A panel header component is used with the Panel to wrap the heading content.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelHeader>
 *    PanelHeader Child Data
 *  </PanelHeader>
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { getClassName } from "../../utils/helpers";

class PanelHeader extends React.PureComponent<PropTypes.InferProps<typeof PanelHeader.propTypes>, any> {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.shape({}),
    headerImage: PropTypes.shape({
      Source: PropTypes.string,
      Placeholder: PropTypes.string
    }),
    otherProps: PropTypes.shape({})
  };

  static defaultProps = {
    children: null,
    title: "",
    className: "Panel-header",
    mods: null,
    style: {},
    headerImage: null,
    otherProps: {}
  };

  render() {
    const {
      title,
      children,
      className,
      mods,
      style,
      headerImage,
      otherProps
    } = this.props;

    if (headerImage) {
      return (
        <header
          className={getClassName(className, "Panel-header--withImage", mods)}
          style={style}
          {...otherProps}
        >
          <div className="Panel-headerImage">
            <img
              src={
                headerImage.Source
                  ? headerImage.Source
                  : headerImage.Placeholder
              }
            />
          </div>
          {title && <h3 className="Panel-title">{title}</h3>}
          {children}
        </header>
      );
    }
    return (
      <header
        className={getClassName(className, mods)}
        style={style}
        {...otherProps}
      >
        {title && <h3 className="Panel-title">{title}</h3>}
        {children}
      </header>
    );
  }
}

export default PanelHeader;
