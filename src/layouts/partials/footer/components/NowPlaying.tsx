import { Link } from 'react-router-dom';
import { isTrackObject } from '@/utils';
import { usePlayerStore } from '@/context/player';
import Button from '~~/Button';

const NowPlaying = () => {
  const player = usePlayerStore((state) => state.player);

  return (
    <div className="flex items-center col-span-3">
      {player && player.item && (
        <>
          <div className="flex items-center px-2">
            <img
              src={isTrackObject(player.item) ? player.item.album.images[0].url : player.item.images[0].url}
              alt="cover"
              className="rounded w-14 h-14"
            />
            <div className="flex flex-col mx-4 mr-1.5">
              <span className="text-sm">
                <Link
                  to={isTrackObject(player.item) ? `/album/${player.item.album.id}` : `/episode/${player.item.id}`}
                  className="hover:underline"
                >
                  {player.item.name}
                </Link>
              </span>
              <span className="text-xs text-nobel">
                <Link
                  to={
                    isTrackObject(player.item) ? `/artist/${player.item.artists[0].id}` : `/show/${player.item.show.id}`
                  }
                  className="hover:text-white hover:underline"
                >
                  {isTrackObject(player.item) ? player.item.artists[0].name : player.item.show.name}
                </Link>
              </span>
            </div>
          </div>
          <Button icon="heart" />
        </>
      )}
    </div>
  );
};

export default NowPlaying;
