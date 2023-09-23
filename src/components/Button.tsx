import { ReactNode } from 'react';
import Icon from '~~/Icon';
import Tooltip from '~~/Tooltip';

type Variants = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = {
  icon: string;
  variant?: Variants;
  size?: 'md' | 'xl';
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
  return (
    <>
      <Tooltip text={ariaLabel}>
        <button
          type="button"
          aria-label={ariaLabel}
          className={`flex items-center rounded-full transition-colors ease-linear duration-200 justify-center transfor 
            ${
              variant === 'primary'
                ? 'text-silver-chalice hover:text-white'
                : variant === 'secondary'
                ? 'text-silver-chalice hover:text-white bg-black/70'
                : 'text-white bg-black/70'
            }
            ${scale ? 'hover:scale-105' : ''} 
            ${glow ? 'hover:bg-cod-gray-300' : ''}
            ${size === 'md' ? 'w-8 h-8' : 'w-8 h-14'}
          `}
          disabled={disabled}
        >
          {children && <div>{children}</div>}
          {!children && <Icon name={icon} size={size} />}
        </button>
      </Tooltip>
    </>
  );
};

export default Button;
