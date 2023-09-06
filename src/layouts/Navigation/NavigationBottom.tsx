import IconButton from '~~/IconButton';
import Icon from '~~/Icon';
import Badge from '~~/Badge';

const NavigationBottom = () => {
  return (
    <div className="flex flex-col flex-1 rounded-lg bg-dark-gray">
      <div className="flex items-center justify-between gap-2 px-4 py-2">
        <button
          type="button"
          className="flex items-center h-10 gap-3 px-2 py-1 transition-colors duration-200 text-subdued hover:text-white"
        >
          <Icon name="library" size="lg" />
          <span className="font-bold leading-snug">Biblioteka</span>
        </button>
        <div className="flex items-center gap-2">
          <IconButton icon="plus" />
          <IconButton icon="arrow-right" />
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 py-2">
        <Badge>Playlisty</Badge>
        <Badge>Wykonawcy</Badge>
        <Badge>Albumy</Badge>
      </div>
    </div>
  );
};

export default NavigationBottom;
