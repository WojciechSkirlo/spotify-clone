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
      className="flex items-center h-10 gap-3 px-2 py-1 leading-6 transition-colors duration-200 text-silver-chalice hover:text-white"
      onClick={onClick}
    >
      <Icon name={collapsed ? iconCollapsed : icon} size="lg" />
      {!collapsed && <span className="hidden font-bold md:block">{name}</span>}
    </button>
  );
};

export default Button;
