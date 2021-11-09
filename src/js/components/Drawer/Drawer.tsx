import * as React from 'react';
import * as PropTypes from 'prop-types';

import { getClassName } from '../../utils/helpers';
import { useOnClickOutside, useBodyScrollLock } from '../../hooks';
import { Placement } from '../../types/placement';
import { useLayoutEffect } from 'react';

const drawerPropTypes = {
  placement: PropTypes.oneOf(Object.values(Placement)),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  allowOverlayClose: PropTypes.bool,
  lockBodyScroll: PropTypes.bool,
  style: PropTypes.object,
  testId: PropTypes.string,
};

type DrawerProps = PropTypes.InferProps<typeof drawerPropTypes>;

const Drawer: React.FC<DrawerProps> = ({
  placement = Placement.Left,
  children,
  open,
  onClose,
  allowOverlayClose = true,
  lockBodyScroll = true,
  style,
  testId,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = React.useCallback(() => {
    if (allowOverlayClose && onClose && open) {
      setIsBodyScrollLocked(false);
      onClose();
    }
  }, [allowOverlayClose, onClose, open]);

  useOnClickOutside(ref, handleClickOutside);

  const { setIsBodyScrollLocked } = useBodyScrollLock();
  React.useEffect(() => {
    setIsBodyScrollLocked(lockBodyScroll && open);
    return () => setIsBodyScrollLocked(false);
  }, [open, lockBodyScroll]);

  const showDrawerClass = open ? 'Drawer--open' : '';
  const anchorAxisClass = [Placement.Left, Placement.Right].includes(placement)
    ? 'Drawer--placement-x'
    : 'Drawer--placement-y';

  const classes = getClassName(
    'Drawer',
    `Drawer--placement-${placement}`,
    anchorAxisClass,
    showDrawerClass
  );

  return (
    <div ref={ref} className={classes} style={style} data-testid={testId}>
      {children}
    </div>
  );
};

export default Drawer;
