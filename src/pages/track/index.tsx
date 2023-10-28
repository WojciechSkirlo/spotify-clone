import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { formatDate, msToTime } from '@/utils';
import { usePlayerStore } from '@/context/player';
import Icon from '~~/Icon';
import Banner from '~~/Banner';

const TrackPage = () => {
  const { trackId } = useParams();
  const { data, error } = useSWR<Track>(`/tracks/${trackId}`);
  const play = usePlayerStore((state) => state.play);

  useEffect(() => {
    console.log('track', data);
  }, [data]);

  if (error) return <>Error :/</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <Banner
        title={data.name}
        type={data.type}
        cover={data.album.images[1].url}
        user={{
          link: `/artist/${data.artists[0].id}}`,
          name: data.artists[0].name
        }}
        info={{
          album: {
            name: data.album.name,
            id: data.album.id
          },
          date: formatDate(data.album.release_date),
          duration: msToTime(data.duration_ms)
        }}
      />

      <div className="flex items-center gap-8 p-6">
        <button
          type="button"
          aria-label="play"
          className="flex items-center justify-center text-black transition-opacity duration-300 transform rounded-full shadow-md h-14 w-14 hover:scale-105 bg-malachite"
          onClick={() => play(data.album.uri, data.track_number - 1)}
        >
          <Icon name="play-smaller" size="lg" />
        </button>
      </div>
    </>
  );
};

export default TrackPage;
