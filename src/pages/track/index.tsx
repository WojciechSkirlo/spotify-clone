import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { Track } from '@/types';
import Icon from '~~/Icon';
import Button from '~~/Button';
import Dropdown from '~~/Dropdown';
import Banner from '~~/Banner';

const TrackPage = () => {
  const { trackId } = useParams();
  const { data, error } = useSWR<Track>(`/tracks/${trackId}`);

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
          img: 'https://i.scdn.co/image/ab6761610000f178e03a98785f3658f0b6461ec4',
          link: `/artist/${data.artists[0].id}}`,
          name: data.artists[0].name
        }}
        info={{
          album: {
            name: data.album.name,
            id: data.album.id
          },
          date: '2020',
          playcount: 4734947
        }}
      />

      <div className="flex items-center gap-8 p-6">
        <button
          type="button"
          aria-label="play"
          className="flex items-center justify-center text-black transition-opacity duration-300 transform rounded-full shadow-md h-14 w-14 hover:scale-105 bg-malachite"
        >
          <Icon name="play-smaller" size="lg" />
        </button>
        <Dropdown button={<Button icon="dots" size="xl" ariaLabel="Więcej opcji dla: neww 2022 November" />}>
          <Dropdown.Item>Dodaj do biblioteki</Dropdown.Item>
          <Dropdown.Item>Dodaj do kolejki</Dropdown.Item>
          <Dropdown.Item borderBottom>Przejdź do radia wykonawcy</Dropdown.Item>
          <Dropdown.Item borderBottom>Dodaj do playlisty</Dropdown.Item>
          <Dropdown.Item borderBottom>Udostępnij</Dropdown.Item>
          <Dropdown.Item>Otwórz w aplikacji na komputerze</Dropdown.Item>
        </Dropdown>
      </div>
    </>
  );
};

export default TrackPage;
