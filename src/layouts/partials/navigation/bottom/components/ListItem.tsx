import Icon from '@/components/Icon';

const ListItem = ({ isCollapsed = false }) => {
  return (
    <button className="flex w-full p-2 rounded gap-x-3 hover:bg-cod-gray-400">
      <div className="flex items-center justify-center w-12 h-12 rounded bg-mine-shaft-500">
        <Icon name="note" size="lg" />
      </div>
      {!isCollapsed && (
        <div className="text-left flex flex-col gap-y-0.5">
          <p className="">My Playlist #1</p>
          <p className="text-sm text-silver-chalice">Playlista • Mateusz Kapuściński</p>
        </div>
      )}
    </button>
  );
};

export default ListItem;
