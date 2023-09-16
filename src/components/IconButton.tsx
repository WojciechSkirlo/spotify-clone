import Icon from '~~/Icon';
import Tooltip from '~~/Tooltip';

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
      <Tooltip text={ariaLabel}>
        <button
          type="button"
          aria-label={ariaLabel}
          className={`flex items-center rounded-full transition-colors ease-linear duration-200 justify-center w-8 h-8 transform text-silver-chalice hover:text-white 
          ${scale ? 'hover:scale-105' : ''} ${glow ? 'hover:bg-cod-gray-300' : ''}`}
        >
          <Icon name={icon} />
        </button>
      </Tooltip>
    </>
  );
};

IconButton.defaultProps = defaultProps;
export default IconButton;
