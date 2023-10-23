import { useSpotifyPlayer, usePlaybackState } from 'react-spotify-web-playback-sdk';
import { msToTime } from '@/utils';
import Button from '~~/Button';
import Icon from '~~/Icon';
import { useEffect } from 'react';

const Player = () => {
  const player = useSpotifyPlayer();
  const playbackState = usePlaybackState();

  const test = () => {
    console.log('playbackState', playbackState);
    console.log('playerState', playbackState);

    player?.togglePlay();
    player?.activateElement();
  };

  useEffect(() => {
    if (!playbackState) {
      player?.activateElement();
    }
  }, []);

  if (!player || !playbackState) return <>player or plaaybackState null</>;

  return (
    <section className="flex flex-col items-center justify-center col-span-4 ml-4">
      <div className="flex gap-4 mb-2">
        <div className="flex gap-2">
          <Button icon="shuffle" />
          <Button icon="previous" onClick={() => player.previousTrack()} />
        </div>
        <button
          type="button"
          aria-label="play"
          className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full"
          onClick={test}
        >
          <Icon name={playbackState.paused ? 'play' : 'pause'} />
        </button>
        <div className="flex gap-2">
          <Button icon="next" onClick={() => player.nextTrack()} />
          <Button icon="repeat" />
        </div>
      </div>
      <div className="flex items-center w-full max-w-[722px]">
        <span className="w-10 mr-2 text-xs text-right text-nobel">{msToTime(playbackState.position)}</span>
        <div className="flex items-center flex-1 h-3 item">
          <div className="w-full h-1 rounded-full bg-tundora"></div>
        </div>
        <span className="w-10 ml-2 text-xs text-left text-nobel">{msToTime(playbackState.duration)}</span>
      </div>
    </section>
  );
};

export default Player;
