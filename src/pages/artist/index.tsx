import { useParams } from 'react-router-dom';
import { formatNumber } from '@/utils';
import { usePlayerStore } from '@/context/player';
import useSWR from 'swr';
import Icon from '~~/Icon';
import Banner from '~~/Banner';

const ArtistPage = () => {
  const { artistId } = useParams();
  const { data, error, isLoading } = useSWR<Artist>(`/artists/${artistId}`);
  const play = usePlayerStore((state) => state.play);

  if (isLoading) return <>Loading...</>;
  if (error || data === undefined) return <>Error :/</>;

  return (
    <>
      <Banner title={data.name} type={data.type} image={data.images?.[0]?.url}>
        <span>{formatNumber(data.followers.total)} obserwujących</span>
      </Banner>

      <div className="relative z-30">
        <div className="flex items-center gap-8 py-6">
          <button
            type="button"
            aria-label="play"
            className="flex items-center justify-center text-black transition-opacity duration-300 transform rounded-full shadow-md h-14 w-14 hover:scale-105 bg-malachite"
            onClick={() => play(data.uri)}
          >
            <Icon name="play-smaller" size="lg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ArtistPage;
