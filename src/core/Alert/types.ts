import React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: object,
  children?: any,
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning',
  closable?: boolean,
  onClose?: (event: React.MouseEvent<{}>) => void,
};
