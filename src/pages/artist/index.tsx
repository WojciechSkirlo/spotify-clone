import { useParams } from 'react-router-dom';
import { formatNumber } from '@/utils';
import { usePlayerStore } from '@/context/player';
import useSWR from 'swr';
import Banner from '~~/Banner';
import PlayButton from '~~/PlayButton';

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
        <PlayButton onClick={() => play(data.uri)} />
      </div>
    </>
  );
};

export default ArtistPage;
