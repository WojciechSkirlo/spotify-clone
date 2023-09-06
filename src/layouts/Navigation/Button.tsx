import Icon from '~~/Icon';

type ButtonProps = {
  name: string;
  icon: string;
  iconCollapsed: string;
  collapsed?: boolean;
  onClick?: () => void;
};

const Button = ({ name, icon, iconCollapsed, collapsed, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`flex items-center h-10 gap-3 px-2 py-1 leading-6 transition-colors duration-200 hover:text-white ${
        collapsed ? 'text-white' : 'text-subdued'
      }`}
      onClick={onClick}
    >
      <Icon name={collapsed ? iconCollapsed : icon} size="lg" />
      {!collapsed && <span className="font-bold">{name}</span>}
    </button>
  );
};

export default Button;
