import { Fragment } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import useSWR from 'swr';
import { isTrackObject, msToTime } from '@/utils';
import Heading from '~~/Heading';
import Card from '~~/Card';
import List from '~~/List';
import Icon from '~~/Icon';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { data, error } = useSWR<Search>(`/search?q=${query}&type=track,artist,album,playlist&limit=8`);

  const columns: Array<Column> = [
    {
      id: 1,
      header: <List.Header>Tytuł</List.Header>,
      item: (item) => {
        const track = item as Track | Episode;

        return (
          <List.Item>
            {isTrackObject(track) && (
              <div className="w-10 h-10 mr-4 bg-mine-shaft-500">
                <img src={track.album.images?.[0]?.url} alt="cover" />
              </div>
            )}
            <div className="flex flex-col">
              <Link to={`/track/${track.id}`} className={`text-base hover:underline text-white`}>
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
                {isTrackObject(track) && (
                  <>
                    {track.artists.map((artist, index) => (
                      <Fragment key={artist.id}>
                        <Link to={`/artist/${artist.id}`} className="leading-5 hover:underline group-hover:text-white">
                          {artist.name}
                        </Link>

                        {index < (track as any).artists.length - 1 && <span>,&nbsp;</span>}
                      </Fragment>
                    ))}
                  </>
                )}
              </div>
            </div>
          </List.Item>
        );
      },
      width: '4fr'
    },
    {
      id: 2,
      header: (
        <List.Header className="justify-end mr-8">
          <Icon name="clock" />
        </List.Header>
      ),
      item: (item) => {
        const track = item as Track | Episode;

        return (
          <List.Item className="justify-end mr-8 tabular-nums">
            <span className="ml-8">{msToTime(track.duration_ms)}</span>
          </List.Item>
        );
      },
      width: 'minmax(12px, 1fr)'
    }
  ];

  if (error) return <>Error :/</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      {!query && <>Brak frazy wyszukiwania</>}
      {query && (
        <>
          {/* Songs */}
          <section>
            <div className="flex items-start justify-between mb-4">
              <Heading size="xl">Utwory</Heading>
            </div>
            <List columns={columns} data={data.tracks.items} />
            {data.tracks.items.length === 0 && <span className="text-nobel">Brak wyników</span>}
          </section>

          {/* Artists */}
          <section className="mt-10">
            <div className="flex items-start justify-between mb-4">
              <Heading size="xl">Wykonawcy</Heading>
            </div>
            <div
              style={{ gridTemplateRows: '1fr 0 0 0 0 0' }}
              className="grid grid-cols-2 overflow-hidden gap-x-2 lg:gap-x-6 custom-grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-9"
            >
              {data.artists.items.map((item) => (
                <Card
                  key={item.id}
                  img={item.images?.[0]?.url}
                  header={item.name}
                  description={`Wykonawca`}
                  link={`/artist/${item.id}`}
                />
              ))}
              {data.artists.items.length === 0 && <span className="text-nobel">Brak wyników</span>}
            </div>
          </section>

          {/* Albums */}
          <section className="mt-10">
            <div className="flex items-start justify-between mb-4">
              <Heading size="xl">Albumy</Heading>
            </div>
            <div
              style={{ gridTemplateRows: '1fr 0 0 0 0 0' }}
              className="grid grid-cols-2 overflow-hidden gap-x-6 custom-grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-9"
            >
              {data.albums.items.map((item) => (
                <Card
                  key={item.id}
                  img={item.images?.[0]?.url}
                  header={item.name}
                  description={`${item.release_date} • ${item.artists.map((item) => item.name).join(', ')}`}
                  link={`/album/${item.id}`}
                />
              ))}
              {data.albums.items.length === 0 && <span className="text-nobel">Brak wyników</span>}
            </div>
          </section>

          {/* Playlists */}
          <section className="mt-10">
            <div className="flex items-start justify-between mb-4">
              <Heading size="xl">Playlisty</Heading>
            </div>
            <div
              style={{ gridTemplateRows: '1fr 0 0 0 0 0' }}
              className="grid grid-cols-2 overflow-hidden gap-x-6 custom-grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-9"
            >
              {data.playlists.items.map((item) => (
                <Card
                  key={item.id}
                  img={item.images?.[0]?.url}
                  header={item.name}
                  description={`Autor: ${item.owner.display_name}`}
                  link={`/playlist/${item.id}`}
                />
              ))}
              {data.playlists.items.length === 0 && <span className="text-nobel">Brak wyników</span>}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SearchPage;
