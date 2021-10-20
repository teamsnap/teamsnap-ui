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
  testId?: string;
}

const Avatar = ({ src, size, mods, testId }: Props) => (
  <div className={`Avatar Avatar--${size} ${mods || ''}`} data-testid={testId}>
    <img alt="Avatar" src={src} />
  </div>
);

export default Avatar;
