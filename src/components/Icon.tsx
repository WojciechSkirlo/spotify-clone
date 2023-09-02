type IconProps = {
  name: string;
};
const icons = import.meta.glob('../assets/icons/*.svg', { as: 'raw', eager: true });

const Icon = ({ name }: IconProps) => {
  const selectedIcon = icons[`../assets/icons/${name}.svg`];

  return <div className="w-4 h-4 fill-current" dangerouslySetInnerHTML={{ __html: selectedIcon }}></div>;
};

export default Icon;
