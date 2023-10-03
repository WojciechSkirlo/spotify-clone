import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { Album } from '@/types';
import Heading from '~~/Heading';
import Icon from '~~/Icon';
import Button from '~~/Button';
import Dropdown from '~~/Dropdown';
import List from '~~/List';

const AlbumPage = () => {
  const { albumId } = useParams();
  const { data, error } = useSWR<Album>(`/albums/${albumId}`);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) return <>Error :/</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <div
        style={{ backgroundColor: 'rgb(24, 24, 64)' }}
        className="h-[30vh] flex items-end max-h-[400px] mt-[-64px] min-h-[360px] w-full top-0 left-0 z-20 gradient-playlist"
      >
        <div className="flex flex-1 p-6">
          <div className="w-[232px] h-[232px] bg-black/70 mr-6">
            <img src={data.images[1].url} alt="cover" className="w-full h-full shadow-cover" />
          </div>
          <div className="flex flex-col justify-end">
            <span className="mb-3 text-sm first-letter:uppercase">{data.album_type}</span>
            <Heading size="3xl" className="mt-1 mb-5">
              {data.name}
            </Heading>
            <div className="flex items-center text-sm">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <img
                    src="https://i.scdn.co/image/ab6761610000f178e03a98785f3658f0b6461ec4"
                    alt="profile"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Link to="/" className="font-bold hover:underline">
                  {data.artists[0].name}
                </Link>
              </div>
              <span className="mx-1">•</span>
              <span>2023</span>
              <span className="mx-1">•</span>
              <span>{data.total_tracks} utworów,</span>
              <span className="text-white/70">&nbsp;39 min 18 sek.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 p-6">
        <button
          type="button"
          aria-label="play"
          className="flex items-center justify-center text-black transition-opacity duration-300 transform rounded-full shadow-md h-14 w-14 hover:scale-105 bg-malachite"
        >
          <Icon name="play-smaller" size="lg" />
        </button>
        <Dropdown button={<Button icon="dots" size="xl" ariaLabel="Więcej opcji dla: neww 2022 November" />}>
          <Dropdown.Item>Dodaj do kolejki</Dropdown.Item>
          <Dropdown.Item borderBottom>Usuń z profilu</Dropdown.Item>
          <Dropdown.Item>Edytuj szczegóły</Dropdown.Item>
          <Dropdown.Item>Utwórz podobną playlistę</Dropdown.Item>
          <Dropdown.Item>Usuń</Dropdown.Item>
          <Dropdown.Item>Nie uwzględniaj w profilu słuchacza</Dropdown.Item>
          <Dropdown.Item borderBottom>Przenieś do folderu</Dropdown.Item>
          <Dropdown.Item borderBottom>Udostępnij</Dropdown.Item>
          <Dropdown.Item borderBottom>Informacje o rekomendacjach</Dropdown.Item>
          <Dropdown.Item>Otwórz w aplikacji na komputerze</Dropdown.Item>
        </Dropdown>
      </div>

      <div className="px-6 pb-10">
        <List>
          <List.Item />
          <List.Item />
        </List>
      </div>
    </>
  );
};

export default AlbumPage;
