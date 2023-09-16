import Tippy from '@tippyjs/react/headless';
import Icon from '~~/Icon';

type IconButtonProps = {
  icon: string;
  ariaLabel?: string;
  scale: boolean;
  glow: boolean;
};

const defaultProps: Omit<IconButtonProps, 'icon'> = {
  scale: true,
  glow: false
};

const IconButton = ({ icon, ariaLabel, scale, glow }: IconButtonProps) => {
  return (
    <>
      <Tippy
        render={(attrs) => (
          <div className="tooltip" {...attrs}>
            testowy :)
          </div>
        )}
      >
        <button
          type="button"
          aria-label={ariaLabel}
          className={`flex items-center rounded-full transition-colors ease-linear duration-200 justify-center w-8 h-8 transform text-nobel hover:text-white 
          ${scale ? 'hover:scale-105' : ''} ${glow ? 'hover:bg-red-500' : ''}`}
        >
          <Icon name={icon} />
        </button>
      </Tippy>
    </>
  );
};

IconButton.defaultProps = defaultProps;
export default IconButton;
