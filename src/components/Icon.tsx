type Size = 'sm' | 'md' | 'lg' | 'xl';

type IconProps = {
  name: string;
  size?: Size;
};

const icons = import.meta.glob('../assets/icons/*.svg', { as: 'raw', eager: true });

const Icon = ({ name, size = 'md' }: IconProps) => {
  const selectedIcon = icons[`../assets/icons/${name}.svg`];
  const sizes: Record<Size, string> = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  return <div className={`fill-current ${sizes[size]}`} dangerouslySetInnerHTML={{ __html: selectedIcon }}></div>;
};

export default Icon;
