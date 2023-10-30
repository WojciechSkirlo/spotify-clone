import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { usePlayerStore } from '@/context/player';
import { msToTime, formatDate } from '@/utils';
import { usePlaybackState } from 'react-spotify-web-playback-sdk';
import Icon from '~~/Icon';
import List from '~~/List';
import Banner from '~~/Banner';
import PlayButton from '~~/PlayButton';

const AlbumPage = () => {
  const { albumId } = useParams();
  const { data, error, isLoading } = useSWR<Album>(`/albums/${albumId}`);
  const play = usePlayerStore((state) => state.play);
  const playbackState = usePlaybackState();

  if (isLoading) return <>Loading...</>;
  if (error || data === undefined) return <>Error :/</>;

  const columns: Array<Column> = [
    {
      id: 1,
      header: <List.Header className="justify-end text-base">#</List.Header>,
      item: (_, index) => {
        return (
          <List.Item className="w-4 h-4">
            <span className="absolute group-hover:hidden text-sm md:text-base -top-[3px] right-[3px] tabular-nums">
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
        const track = item as SimplifiedTrack;
        const isPlaying = playbackState?.context.metadata?.current_item.uri === track.uri;

        return (
          <List.Item>
            <div className="flex flex-col">
              <Link
                to={`/track/${track.id}`}
                className={`text-sm md:text-base hover:underline ${isPlaying ? 'text-malachite' : 'text-white'}`}
              >
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
        <List.Header className="justify-end md:mr-4 lg:mr-8">
          <Icon name="clock" />
        </List.Header>
      ),
      item: (item) => {
        const track = item as SimplifiedTrack;

        return (
          <List.Item className="justify-end md:mr-4 lg:mr-8 tabular-nums">
            <span>{msToTime(track.duration_ms)}</span>
          </List.Item>
        );
      },
      width: 'minmax(12px, 1fr)'
    }
  ];

  return (
    <>
      <Banner title={data.name} type={data.album_type} image={data.images?.[0]?.url}>
        <div className="flex items-center gap-1">
          <Link to={`/artist/${data.artists?.[0]?.id}`} className="font-bold hover:underline">
            {data.artists?.[0]?.name}
          </Link>
        </div>
        <span className="mx-1">•</span>
        <span>{formatDate(data.release_date)}</span>
        <span className="mx-1">•</span>
        <span>{data.total_tracks} utworów</span>
        <span className="mx-1">•</span>
        <span>{msToTime(data.tracks.items.reduce((acc, curr) => acc + curr.duration_ms, 0))}</span>
      </Banner>

      <div className="relative z-30">
        <PlayButton onClick={() => play(data.uri, 0)} />
        <List columns={columns} data={data.tracks.items} />
      </div>
    </>
  );
};

export default AlbumPage;
