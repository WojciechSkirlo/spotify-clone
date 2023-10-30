import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { formatDate, msToTime } from '@/utils';
import { Link } from 'react-router-dom';
import { usePlayerStore } from '@/context/player';
import Banner from '~~/Banner';
import PlayButton from '~~/PlayButton';

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
        <PlayButton onClick={() => play(data.album.uri, data.track_number - 1)} />
      </div>
    </>
  );
};

export default TrackPage;
