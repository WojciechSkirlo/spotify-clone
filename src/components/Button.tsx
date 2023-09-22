import { ReactNode } from 'react';
import Icon from '~~/Icon';
import Tooltip from '~~/Tooltip';

type Variants = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = {
  icon: string;
  variant: Variants;
  ariaLabel?: string;
  scale?: boolean;
  glow?: boolean;
  disabled?: boolean;
  children?: ReactNode;
};

const defaultProps: Omit<ButtonProps, 'icon'> = {
  variant: 'primary',
  scale: true
};

const Button = ({ variant, icon, ariaLabel, scale, glow, disabled, children }: ButtonProps) => {
  return (
    <>
      <Tooltip text={ariaLabel}>
        <button
          type="button"
          aria-label={ariaLabel}
          className={`flex items-center rounded-full p-1 transition-colors ease-linear duration-200 justify-center w-8 h-8 transfor 
            ${
              variant === 'primary'
                ? 'text-silver-chalice hover:text-white'
                : variant === 'secondary'
                ? 'text-silver-chalice hover:text-white bg-black/70'
                : 'text-white bg-black/70'
            }
            ${scale ? 'hover:scale-105' : ''} 
            ${glow ? 'hover:bg-cod-gray-300' : ''}
          `}
          disabled={disabled}
        >
          {children && <div>{children}</div>}
          {!children && <Icon name={icon} />}
        </button>
      </Tooltip>
    </>
  );
};

Button.defaultProps = defaultProps;
export default Button;
