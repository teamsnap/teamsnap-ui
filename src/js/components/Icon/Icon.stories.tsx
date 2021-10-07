import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Icon from './Icon';

const stories = storiesOf('Icon', module);

export default {
  title: 'Icon',
  component: Icon,
};

const iconNames = {
  home: 'home',
  roster: 'roster',
  team: 'team',
  divisions: 'divisions',
  rostering: 'rostering',
  'add-member': 'add-member',
  'remove-member': 'remove-member',
  'non-player': 'non-player',
  registration: 'registration',
  directory: 'directory',
  'new-season': 'new-season',
  seasons: 'seasons',
  schedule: 'schedule',
  availability: 'availability',
  tracking: 'tracking',
  'add-event': 'add-event',
  assignments: 'assignments',
  messages: 'messages',
  mail: 'mail',
  alerts: 'alerts',
  posts: 'posts',
  inbox: 'inbox',
  sent: 'sent',
  send: 'send',
  'credit-card': 'credit-card',
  money: 'money',
  piggybank: 'piggybank',
  installments: 'installments',
  fees: 'fees',
  scale: 'scale',
  cart: 'cart',
  media: 'media',
  photos: 'photos',
  video: 'video',
  statistics: 'statistics',
  dashboard: 'dashboard',
  settings: 'settings',
  megaphone: 'megaphone',
  public: 'public',
  computer: 'computer',
  pointer: 'pointer',
  notifications: 'notifications',
  star: 'star',
  alert: 'alert',
  info: 'info',
  'arrow-left': 'arrow-left',
  'arrow-right': 'arrow-right',
  'arrow-up': 'arrow-up',
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
  'caret-down': 'caret-down',
  sort: 'sort',
  check: 'check',
  'check-circle-fill': 'check-circle-fill',
  dismiss: 'dismiss',
  plus: 'plus',
  edit: 'edit',
  trash: 'trash',
  search: 'search',
  refresh: 'refresh',
  preview: 'preview',
  drag: 'drag',
  export: 'export',
  import: 'import',
  download: 'download',
  archive: 'archive',
  doc: 'doc',
  file: 'file',
  waiver: 'waiver',
  forms: 'forms',
  grid: 'grid',
  'page-layout': 'page-layout',
  lock: 'lock',
  location: 'location',
  loader: 'loader',
  stopwatch: 'stopwatch',
  safety: 'safety',
};

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

stories.add(
  'Default',
  () => (
    <Icon
      name={select('Icon', iconNames, 'home')}
      mods={`${select('Size', iconSizes, '')} ${select('Color', iconColors, '')}`}
    />
  ),
  {
    info: 'Icons inherit the text color and size of their parent element by default. Apply text and color utility classes as mods to alter the size and color of the icon. For a full list of icons, visit UI Patterns: https://teamsnap-ui-patterns.netlify.com/icons.html.',
  }
);
