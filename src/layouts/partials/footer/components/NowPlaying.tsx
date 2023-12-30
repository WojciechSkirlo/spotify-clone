import { Link } from 'react-router-dom';
import { usePlaybackState } from 'react-spotify-web-playback-sdk';

const NowPlaying = () => {
  const playbackState = usePlaybackState();

  const albumId = playbackState?.track_window?.current_track?.album?.uri?.split?.(':')?.at?.(-1);
  const artistId = playbackState?.track_window?.current_track?.artists?.[0]?.uri?.split?.(':')?.at?.(-1);

  const albumEpisodeLink = `/album/${albumId}`;
  const artistShowLink = `/artist/${artistId}`;

  return (
    <div className="flex items-center col-span-5 md:col-span-4 lg:col-span-3">
      {playbackState && (
        <>
          <div className="flex items-center md:px-2">
            <img
              src={playbackState.track_window?.current_track?.album?.images?.[0]?.url}
              alt="cover"
              className="rounded w-14 h-14"
            />
            <div className="flex flex-col ml-3 md:ml-4 mr-1.5">
              <span className="text-sm">
                {/* ALBUM / EPISODE */}
                <Link to={albumEpisodeLink} className="hover:underline line-clamp-2 md:line-clamp-none">
                  {playbackState.track_window?.current_track?.name}
                </Link>
              </span>
              <span className="text-xs text-nobel">
                {/* ARTIST / SHOW */}
                <Link to={artistShowLink} className="hover:text-white hover:underline">
                  {playbackState.track_window?.current_track?.artists?.[0]?.name}
                </Link>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NowPlaying;
