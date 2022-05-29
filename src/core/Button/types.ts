import type React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<{}> {
  sx?: object,
  children?: any,
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning',
  loading?: boolean,
  endIcon?: any,
  startIcon?: any,
  size?: 'small' | 'medium' | 'large',
  variant?: 'contained' | 'outlined' | 'outlined-dashed' | 'text',
  rounded?: boolean,
  htmlType?: 'button' | 'submit' | 'reset',
};
