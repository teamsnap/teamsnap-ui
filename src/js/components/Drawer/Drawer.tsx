import * as React from 'react';
import * as PropTypes from 'prop-types';

import { getClassName } from '../../utils/helpers';
import { useOnClickOutside, useBodyScrollLock } from '../../hooks';
import { Placement } from '../../types/placement';

const propTypes = {
  placement: PropTypes.oneOf(Object.values(Placement)),
  open: PropTypes.bool.isRequired,
  closeFn: PropTypes.func.isRequired,
  showOverlay: PropTypes.bool,
  allowOverlayClose: PropTypes.bool,
  allowBodyScroll: PropTypes.bool,
  style: PropTypes.object,
  overlayStyle: PropTypes.object,
  mods: PropTypes.string,
  overlayMods: PropTypes.string,
  testId: PropTypes.string,
};

type DrawerProps = PropTypes.InferProps<typeof propTypes>;

const Drawer: React.FC<DrawerProps> = ({
  placement = Placement.Right,
  children,
  open,
  closeFn,
  showOverlay = false,
  allowOverlayClose = true,
  allowBodyScroll = false,
  style,
  overlayStyle,
  mods,
  overlayMods,
  testId,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = React.useCallback(() => {
    if (allowOverlayClose && closeFn && open) {
      setIsBodyScrollLocked(false);
      closeFn();
    }
  }, [allowOverlayClose, closeFn, open]);

  useOnClickOutside(ref, handleClickOutside);

  const { setIsBodyScrollLocked } = useBodyScrollLock();
  React.useEffect(() => {
    setIsBodyScrollLocked(!allowBodyScroll && open);
    return () => setIsBodyScrollLocked(false);
  }, [open, allowBodyScroll]);

  const showDrawerClass = open ? 'Drawer--open' : '';
  const placementAxisClass = [Placement.Left, Placement.Right].includes(placement)
    ? 'Drawer--placement-x'
    : 'Drawer--placement-y';

  const classes = getClassName(
    'Drawer',
    `Drawer--placement-${placement}`,
    placementAxisClass,
    showDrawerClass,
    mods
  );

  const overlayClasses = getClassName(
    'Drawer-overlay',
    open ? 'Drawer-overlay--open' : '',
    overlayMods
  );

  return (
    <>
      <div ref={ref} className={classes} style={style} data-testid={testId}>
        {children}
      </div>
      {showOverlay && <div style={overlayStyle} className={overlayClasses}></div>}
    </>
  );
};

Drawer.defaultProps = {
  placement: Placement.Right,
  showOverlay: false,
  allowOverlayClose: true,
  allowBodyScroll: false,
  style: {},
  overlayStyle: {},
  mods: null,
  overlayMods: null,
  testId: null,
};

export default Drawer;
