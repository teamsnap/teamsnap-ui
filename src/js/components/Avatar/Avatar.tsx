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

const Avatar: React.FC<Props> = ({ src, size, mods }: Props) => (
  <div className={`Avatar Avatar--${size} ${mods || ''}`}>
    <img src={src} alt="Avatar" />
  </div>
);

export default Avatar;
