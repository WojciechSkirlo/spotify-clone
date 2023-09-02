export default function NowPlaying() {
  return (
    <div className="w-[30%] flex items-center">
      <div className="flex items-center px-2">
        <img
          src="https://i.scdn.co/image/ab67616d00004851877ea8fa223c26f19aaef92d"
          alt="cover"
          className="rounded w-14 h-14"
        />
        <div className="flex flex-col mx-4 mr-2">
          <span className="text-sm">
            <a href="#" className="hover:underline">
              Love Story (Taylor's Version)
            </a>
          </span>
          <span className="text-[11px] text-subtle">
            <a href="#" className="hover:text-white hover:underline">
              Taylor Swift
            </a>
          </span>
        </div>
      </div>
      <button className="flex items-center justify-center w-8 h-8 text-subtle">
        <i className="sp-heart-icon"></i>
      </button>
      <button className="flex items-center justify-center w-8 h-8 text-subtle">
        <i className="sp-minimize-icon"></i>
      </button>
    </div>
  );
}
