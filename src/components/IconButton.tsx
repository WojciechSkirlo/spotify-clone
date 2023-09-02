import Icon from '~~/Icon';

type IconButtonProps = {
  icon: string;
};

const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <button type="button" className="flex items-center justify-center w-8 h-8 text-subtle hover:text-white">
      <Icon name={icon} />
    </button>
  );
};

export default IconButton;
