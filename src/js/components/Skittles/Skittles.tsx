import React from "react";

const colorMap = {
  0: 'u-bgNegative',
  1: 'u-bgWarning',
  2: 'u-bgSuccess',
  3: 'u-bgPrimary',
}

export interface PropTypes {
  text: String;
  style?: React.CSSProperties;
  mods?: String;
}

/**
 * Skittles takes in a string of text and creates a simple "badge" style object with consistent colors
 * @param text
 */
const Skittles: React.FunctionComponent<PropTypes> = ({text, style, mods}) => {
  const firstLetterCharCode = text.charCodeAt(0) || 1;
  const colorHash = firstLetterCharCode % 4;
  const lastLetterCharCode = text.charCodeAt(text.length - 1) || 1;
  const intensityHash = lastLetterCharCode % 4;
  return <span
          style={{width: "22px", height: "22px", display: "inline-block", ...style}}
          className={`u-textCenter u-borderRadiusMd u-fontSizeXs u-padXs ${colorMap[colorHash]}${intensityHash+3} ${intensityHash >= 2 ? "u-colorNeutral1" : ""} ${mods ? mods: ""}`}>
    { text.substr(0, 2) }
  </span>
};

export default Skittles;
