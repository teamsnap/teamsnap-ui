/**
 * @name Avatar
 *
 * @description
 *  A simple component used to display an avatar for a user or organization.
 *
 * @example
 *  <Avatar
 *   mods="u-spaceRightSm"
 *   src="https://img.url"
 *   size="sm"
 *  />
 *
 */

import * as React from "react";

interface Props {
  src: string;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "fill";
  mods?: string;
}

const Avatar: React.FunctionComponent<Props> = ({src, size, mods}) => (
  <div className={`Avatar Avatar--${size} ${!!mods ? mods : ""}`}>
    <img src={src} />
  </div>
)

export default Avatar;
