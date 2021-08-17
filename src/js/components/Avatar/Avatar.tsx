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

import * as React from 'react';

export interface Props {
  src: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fill';
  mods?: string;
}

const Avatar = ({ src, size, mods }: Props) => (
  <div className={`Avatar Avatar--${size} ${mods || ''}`}>
    <img alt="Avatar" src={src} />
  </div>
);

export default Avatar;
