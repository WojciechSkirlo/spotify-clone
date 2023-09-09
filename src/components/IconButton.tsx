import Icon from '~~/Icon';

type IconButtonProps = {
  icon: string;
  ariaLabel?: string;
};

const IconButton = ({ icon, ariaLabel }: IconButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="flex items-center justify-center w-8 h-8 text-nobel hover:text-white"
    >
      <Icon name={icon} />
    </button>
  );
};

export default IconButton;
