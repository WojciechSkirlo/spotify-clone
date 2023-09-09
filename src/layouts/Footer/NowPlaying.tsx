import IconButton from '~~/IconButton';

const NowPlaying = () => {
  return (
    <div className="flex items-center col-span-3">
      <div className="flex items-center px-2">
        <img
          src="https://i.scdn.co/image/ab67616d00004851877ea8fa223c26f19aaef92d"
          alt="cover"
          className="rounded w-14 h-14"
        />
        <div className="flex flex-col mx-4 mr-1.5">
          <span className="text-sm">
            <a href="#" className="hover:underline">
              Love Story (Taylor’s Version)
            </a>
          </span>
          <span className="text-xs text-nobel">
            <a href="#" className="hover:text-white hover:underline">
              Taylor Swift
            </a>
          </span>
        </div>
      </div>
      <IconButton icon="heart" />
      <IconButton icon="minimize" />
    </div>
  );
};

export default NowPlaying;
