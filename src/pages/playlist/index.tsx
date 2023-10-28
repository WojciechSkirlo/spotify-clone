import { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import useSWR from 'swr';
import { isTrackObject, formatDate, msToTime } from '@/utils';
import { usePlayerStore } from '@/context/player';
import { usePlaybackState } from 'react-spotify-web-playback-sdk';
import Icon from '~~/Icon';
import List from '~~/List';
import Banner from '~~/Banner';

const PlaylistPage = () => {
  const { playlistId } = useParams();
  const { data, error } = useSWR<PlayList>(`/playlists/${playlistId}`);
  const play = usePlayerStore((state) => state.play);
  const playbackState = usePlaybackState();

  if (error) return <>Error :/</>;
  if (!data) return <>Loading...</>;

  const columns: Array<Column> = [
    {
      id: 1,
      header: <List.Header className="justify-end text-base">#</List.Header>,
      item: (_, index) => {
        return (
          <List.Item className="w-4 h-4">
            <span className="absolute group-hover:hidden text-base -top-[3px] right-[3px] tabular-nums">
              {index + 1}
            </span>
            <button
              type="button"
              aria-label="play"
              className="hidden text-white group-hover:block"
              onClick={() => play(data.uri, index)}
            >
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
        const track = item as PlaylistTrack;
        const isPlaying = playbackState?.context.metadata?.current_item.uri === (track.track as Track).uri;

        return (
          <List.Item>
            {isTrackObject(track.track) && (
              <div className="w-10 h-10 mr-4 bg-mine-shaft-500">
                <img src={track.track.album.images[1].url} alt="cover" />
              </div>
            )}
            <div className="flex flex-col">
              <Link
                to={`/track/${track.track.id}`}
                className={`text-base hover:underline ${isPlaying ? 'text-malachite' : 'text-white'}`}
              >
                {track.track.name}
              </Link>
              <div className="flex items-center">
                {track.track.explicit && (
                  <span
                    title="Treści nieprzyzwoite"
                    className="rounded-sm mr-2 inline-flex leading-[10px] text-[9px] py-[3px] px-[5px] bg-white/60 text-cod-gray-500"
                  >
                    E
                  </span>
                )}
                {isTrackObject(track.track) && (
                  <>
                    {track.track.artists.map((artist, index) => (
                      <Fragment key={artist.id}>
                        <Link to={`/artist/${artist.id}`} className="leading-5 hover:underline group-hover:text-white">
                          {artist.name}
                        </Link>

                        {/* TODO: FIX */}
                        {index < (track.track as any).artists.length - 1 && <span>,&nbsp;</span>}
                      </Fragment>
                    ))}
                  </>
                )}
              </div>
            </div>
          </List.Item>
        );
      },
      width: '6fr'
    },
    {
      id: 3,
      header: <List.Header>Album</List.Header>,
      item: (item) => {
        const track = item as PlaylistTrack;

        return (
          <List.Item>
            {isTrackObject(track.track) && (
              <Link to={`/album/${track.track.album.id}`} className="hover:underline group-hover:text-white">
                {track.track.album.name}
              </Link>
            )}
          </List.Item>
        );
      },
      width: '4fr'
    },
    {
      id: 4,
      header: <List.Header>Data dodania</List.Header>,
      item: (item) => {
        const track = item as PlaylistTrack;

        return (
          <List.Item>
            <span>{formatDate(track.added_at)}</span>
          </List.Item>
        );
      },
      width: '3fr'
    },
    {
      id: 5,
      header: (
        <List.Header className="justify-end mr-8">
          <Icon name="clock" />
        </List.Header>
      ),
      item: (item) => {
        const track = item as PlaylistTrack;

        return (
          <List.Item className="justify-end mr-8 tabular-nums">
            <span className="ml-8">{msToTime(track.track.duration_ms)}</span>
          </List.Item>
        );
      },
      width: 'minmax(120px, 1fr)'
    }
  ];

  return (
    <>
      <Banner
        title={data.name}
        type={data.type}
        cover={data.images[1].url}
        user={{
          link: `/user/${data.owner.id}`,
          name: data.owner.display_name ?? ''
        }}
        info={{
          numberOfTracks: data.tracks.total,
          duration: msToTime(data.tracks.items.reduce((acc, curr) => acc + curr.track.duration_ms, 0))
        }}
      />

      <div className="flex items-center gap-8 p-6">
        <button
          type="button"
          aria-label="play"
          className="flex items-center justify-center text-black transition-opacity duration-300 transform rounded-full shadow-md h-14 w-14 hover:scale-105 bg-malachite"
          onClick={() => play(data.uri)}
        >
          <Icon name="play-smaller" size="lg" />
        </button>
      </div>

      <div className="px-6 max-w-[1955px] pb-6">
        <List columns={columns} data={data.tracks.items} />
      </div>
    </>
  );
};

export default PlaylistPage;
