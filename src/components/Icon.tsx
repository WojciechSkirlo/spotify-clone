type Sizes = 'sm' | 'md' | 'lg';

type IconProps = {
  name: string;
  size: Sizes;
};

const defaultProps: Omit<IconProps, 'name'> = {
  size: 'md'
};

const icons = import.meta.glob('../assets/icons/*.svg', { as: 'raw', eager: true });

const Icon = ({ name, size }: IconProps) => {
  const selectedIcon = icons[`../assets/icons/${name}.svg`];
  const sizes: Record<Sizes, string> = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };

  return <div className={`fill-current ${sizes[size]}`} dangerouslySetInnerHTML={{ __html: selectedIcon }}></div>;
};

Icon.defaultProps = defaultProps;
export default Icon;
