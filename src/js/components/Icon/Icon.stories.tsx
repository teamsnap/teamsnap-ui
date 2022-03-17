import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import Icon from './Icon';

export default {
  title: 'Components/Data Display/Icon',
};

const iconNames = [
  'add-event',
  'add-member',
  'alert',
  'alerts',
  'archive',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'assignments',
  'availability',
  'calendar-today',
  'caret-down',
  'cart',
  'check',
  'check-circle-fill',
  'computer',
  'content-copy',
  'credit-card',
  'dashboard',
  'directory',
  'dismiss',
  'divisions',
  'doc',
  'down',
  'download',
  'drag',
  'edit',
  'export',
  'fees',
  'file',
  'forms',
  'grid',
  'home',
  'import',
  'inbox',
  'info',
  'installments',
  'left',
  'loader',
  'location',
  'lock',
  'mail',
  'media',
  'megaphone',
  'messages',
  'money',
  'more-horiz',
  'new-season',
  'non-player',
  'notifications',
  'page-layout',
  'photos',
  'piggybank',
  'plus',
  'pointer',
  'posts',
  'preview',
  'public',
  'refresh',
  'registration',
  'remove-member',
  'right',
  'roster',
  'rostering',
  'sell',
  'safety',
  'scale',
  'schedule',
  'search',
  'seasons',
  'send',
  'sent',
  'settings',
  'sort',
  'star',
  'statistics',
  'stopwatch',
  'task-alt',
  'team',
  'tracking',
  'trash',
  'up',
  'video',
  'visibility',
  'visibility-off',
  'waiver',
];

const iconSizes = {
  Default: '',
  'Extra Small': 'u-fontSizeXs',
  Small: 'u-fontSizeSm',
  Medium: 'u-fontSizeMd',
  Large: 'u-fontSizeLg',
  'X-Large': 'u-fontSizeXl',
  'XX-Large': 'u-fontSizeXxl',
};

const iconColors = {
  Default: '',
  'Text Color': 'u-colorInfo',
  Negative: 'u-colorNegative',
  Positive: 'u-colorPositive',
  Primary: 'u-colorPrimary',
};

export const Default = () => (
  <Icon
    name={select('Icon', iconNames, 'home')}
    mods={`${select('Size', iconSizes, '')} ${select('Color', iconColors, '')}`}
  />
);

export const Map = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))',
    gridTemplateRows: 'repeat(8, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '32px',
  }}>
    {iconNames.map((icon) => (
      <div className="u-textCenter">
        <Icon
          name={icon}
          mods="u-fontSizeLg"
        />
        <p>{icon}</p>
      </div>
    ))}
  </div>
);
