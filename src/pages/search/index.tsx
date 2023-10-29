import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import Heading from '~~/Heading';
import Card from '~~/Card';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { data, error } = useSWR<Search>(`/search?q=${query}&type=artist,album,playlist&limit=8`);

  if (error) return <>Error :/</>;
  if (!data) return <>Loading...</>;

  return (
    <div className="px-2 lg:px-6 mt-2 max-w-[1955px] pb-6">
      {!query && <>Brak frazy wyszukiwania</>}
      {query && (
        <>
          <section>
            <div className="flex items-start justify-between mb-4">
              <Heading size="xl">Wykonawcy</Heading>
            </div>
            <div
              style={{ gridTemplateRows: '1fr 0 0 0 0 0' }}
              className="grid grid-cols-2 overflow-hidden gap-x-6 custom-grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-9"
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
    </div>
  );
};

export default SearchPage;
