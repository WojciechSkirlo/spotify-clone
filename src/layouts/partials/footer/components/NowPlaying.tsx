import { Link } from 'react-router-dom';
import { usePlaybackState } from 'react-spotify-web-playback-sdk';

const NowPlaying = () => {
  const playbackState = usePlaybackState();

  const albumId = playbackState?.context.metadata?.current_item.group.uri.split(':').at(-1);
  const artistId = playbackState?.context.metadata?.current_item.artists[0].uri.split(':').at(-1);

  const albumEpisodeLink = `/album/${albumId}`;
  const artistShowLink = `/artist/${artistId}`;

  return (
    <div className="flex items-center col-span-3">
      {playbackState && (
        <>
          <div className="flex items-center px-2">
            <img
              src={playbackState.context.metadata?.current_item.images?.[0]?.url}
              alt="cover"
              className="rounded w-14 h-14"
            />
            <div className="flex flex-col mx-4 mr-1.5">
              <span className="text-sm">
                {/* ALBUM / EPISODE */}
                <Link to={albumEpisodeLink} className="hover:underline">
                  {playbackState.context.metadata?.current_item.name}
                </Link>
              </span>
              <span className="text-xs text-nobel">
                {/* ARTIST / SHOW */}
                <Link to={artistShowLink} className="hover:text-white hover:underline">
                  {playbackState.context.metadata?.current_item.artists[0].name}
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
