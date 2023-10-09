import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { PlayList, Column, PlaylistTrackObject } from '@/types';
import Banner from '@/pages/playlist/components/Banner';
import Icon from '~~/Icon';
import Button from '~~/Button';
import Dropdown from '~~/Dropdown';
import List from '~~/List';

const columns: Array<Column> = [
  {
    id: 1,
    header: <List.Header className="justify-end text-base">#</List.Header>,
    item: (_, index) => {
      return (
        <List.Item className="w-4 h-4">
          <span className="absolute group-hover:hidden text-base -top-[3px] right-[3px] tabular-nums">{index + 1}</span>
          <button type="button" aria-label="play" className="hidden text-white group-hover:block">
            <Icon name="play-smaller" />
          </button>
        </List.Item>
      );
    }
  },
  {
    id: 2,
    header: <List.Header>Tytuł</List.Header>,
    item: () => {
      return (
        <List.Item>
          <div className="flex flex-col"></div>
        </List.Item>
      );
    }
  },
  {
    id: 3,
    header: (
      <List.Header className="justify-end mr-8">
        <Icon name="clock" />
      </List.Header>
    ),
    item: (item) => {
      const track = item as PlaylistTrackObject;

      return (
        <List.Item className="justify-end mr-8 tabular-nums">
          <Button icon="heart" />
          <span className="ml-8">{track.track.duration_ms}</span>
        </List.Item>
      );
    }
  }
];

const PlaylistPage = () => {
  const { playlistId } = useParams();
  const { data, error } = useSWR<PlayList>(`/playlists/${playlistId}`);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) return <>Error :/</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <Banner />

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

      <div className="px-6 max-w-[1955px]">
        <List columns={columns} data={data.tracks.items} />
      </div>
    </>
  );
};

export default PlaylistPage;
