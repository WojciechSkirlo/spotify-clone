import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { formatDate, msToTime } from '@/utils';
import { Link } from 'react-router-dom';
import { usePlayerStore } from '@/context/player';
import Icon from '~~/Icon';
import Banner from '~~/Banner';

const TrackPage = () => {
  const { trackId } = useParams();
  const { data, error, isLoading } = useSWR<Track>(`/tracks/${trackId}`);
  const play = usePlayerStore((state) => state.play);

  if (isLoading) return <>Loading...</>;
  if (error || data === undefined) return <>Error :/</>;

  return (
    <>
      <Banner title={data.name} type={data.type} image={data.album.images?.[0]?.url}>
        <div className="flex items-center gap-1">
          <Link to={`/artist/${data.artists?.[0]?.id}`} className="font-bold hover:underline">
            {data.artists?.[0]?.name}
          </Link>
        </div>
        <span className="mx-1">•</span>
        <Link to={`/album/${data.album.id}`} className="hover:underline">
          {data.album.name}
        </Link>
        <span className="mx-1">•</span>
        <span>{formatDate(data.album.release_date)}</span>
        <span className="mx-1">•</span>
        <span>{msToTime(data.duration_ms)}</span>
      </Banner>

      <div className="relative z-30">
        <div className="flex items-center gap-8 py-6">
          <button
            type="button"
            aria-label="play"
            className="flex items-center justify-center text-black transition-opacity duration-300 transform rounded-full shadow-md h-14 w-14 hover:scale-105 bg-malachite"
            onClick={() => play(data.album.uri, data.track_number - 1)}
          >
            <Icon name="play-smaller" size="lg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TrackPage;
