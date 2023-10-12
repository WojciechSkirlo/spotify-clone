import { ReactNode } from 'react';
import Icon from '~~/Icon';
import Tooltip from '~~/Tooltip';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Size = 'md' | 'xl';

type ButtonProps = {
  icon?: string;
  variant?: Variant;
  size?: Size;
  scale?: boolean;
  glow?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const Button = ({
  icon,
  variant = 'primary',
  size = 'md',
  scale = true,
  glow,
  disabled,
  ariaLabel,
  children,
  onClick
}: ButtonProps) => {
  const variantClasses = {
    primary: 'text-silver-chalice hover:text-white',
    secondary: 'text-silver-chalice hover:text-white bg-black/70',
    tertiary: 'text-white bg-black/70'
  };

  const sizeClasses = {
    md: 'w-8 h-8',
    xl: 'w-8 h-14'
  };

  const classes = `flex items-center rounded-full transition-colors ease-linear duration-200 justify-center transform ${
    variantClasses[variant]
  } ${scale ? 'hover:scale-105' : ''} ${glow ? 'hover:bg-cod-gray-300' : ''} ${sizeClasses[size]} ${
    disabled ? 'opacity-60 cursor-not-allowed' : ''
  }`;

  const content = icon ? <Icon name={icon} size={size} /> : <>{children}</>;

  return (
    <Tooltip text={ariaLabel} disabled={disabled}>
      <button type="button" aria-label={ariaLabel} className={classes} disabled={disabled} onClick={onClick}>
        {content}
      </button>
    </Tooltip>
  );
};

export default Button;
