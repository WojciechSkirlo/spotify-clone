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
};

const Button = ({
  icon,
  variant = 'primary',
  size = 'md',
  scale = true,
  glow,
  disabled,
  ariaLabel,
  children
}: ButtonProps) => {
  const variantClasses = {
    primary: 'text-silver-chalice hover:text-white',
    secondary: 'text-silver-chalice hover:text-white bg-black/70',
    tertiary: 'text-white bg-black/70'
  };

  const sizeClasses = {
    md: icon ? 'w-8 h-8' : 'h-8',
    xl: icon ? 'w-8 h-14' : 'h-14'
  };

  const content = icon ? <Icon name={icon} size={size} /> : <>{children}</>;

  return (
    <Tooltip text={ariaLabel}>
      <button
        type="button"
        aria-label={ariaLabel}
        className={`flex items-center rounded-full transition-colors ease-linear duration-200 justify-center transform
            ${variantClasses[variant]}
            ${scale ? 'hover:scale-105' : ''} 
            ${glow ? 'hover:bg-cod-gray-300' : ''}
            ${sizeClasses[size]}
          `}
        disabled={disabled}
      >
        {content}
      </button>
    </Tooltip>
  );
};

export default Button;
