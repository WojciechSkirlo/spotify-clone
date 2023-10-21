import { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { msToTime } from '@/utils';
import Icon from '~~/Icon';
import Button from '~~/Button';
import Dropdown from '~~/Dropdown';
import List from '~~/List';
import Banner from '~~/Banner';

const columns: Array<Column> = [
  {
    id: 1,
    header: <List.Header className="justify-end text-base">#</List.Header>,
    item: (item) => {
      const track = item as SimplifiedTrack;

      return (
        <List.Item className="w-4 h-4">
          <span className="absolute group-hover:hidden text-base -top-[3px] right-[3px] tabular-nums">
            {track.track_number}
          </span>
          <button type="button" aria-label="play" className="hidden text-white group-hover:block">
            <Icon name="play-smaller" />
          </button>
        </List.Item>
      );
    },
    width: '16px'
  },
  {
    id: 2,
    header: <List.Header>Tytuł</List.Header>,
    item: (item) => {
      const track = item as SimplifiedTrack;

      return (
        <List.Item>
          <div className="flex flex-col">
            <Link to={`/track/${track.id}`} className="text-base text-white hover:underline">
              {track.name}
            </Link>
            <div className="flex items-center">
              {track.explicit && (
                <span
                  title="Treści nieprzyzwoite"
                  className="rounded-sm mr-2 inline-flex leading-[10px] text-[9px] py-[3px] px-[5px] bg-white/60 text-cod-gray-500"
                >
                  E
                </span>
              )}
              {track.artists.map((artist, index) => (
                <Fragment key={artist.id}>
                  <Link to={`/artist/${artist.id}`} className="leading-5 hover:underline group-hover:text-white">
                    {artist.name}
                  </Link>
                  {index < track.artists.length - 1 && <span>,&nbsp;</span>}
                </Fragment>
              ))}
            </div>
          </div>
        </List.Item>
      );
    },
    width: '4fr'
  },
  {
    id: 3,
    header: (
      <List.Header className="justify-end mr-8">
        <Icon name="clock" />
      </List.Header>
    ),
    item: (item) => {
      const track = item as SimplifiedTrack;

      return (
        <List.Item className="justify-end mr-8 tabular-nums">
          <Button icon="heart" />
          <span className="ml-8">{msToTime(track.duration_ms)}</span>
        </List.Item>
      );
    },
    width: 'minmax(12px, 1fr)'
  }
];

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
      <Banner
        title={data.name}
        type={data.album_type}
        cover={data.images[1].url}
        user={{
          img: 'https://i.scdn.co/image/ab6761610000f178e03a98785f3658f0b6461ec4',
          link: `/artist/${data.artists[0].id}`,
          name: data.artists[0].name
        }}
        info={{
          date: '2020',
          numberOfTracks: 12,
          duration: '39 min 18 sek.'
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

      <div className="px-6 max-w-[1955px] pb-6">
        <List columns={columns} data={data.tracks.items} />
      </div>
    </>
  );
};

export default AlbumPage;
