import { useEffect } from 'react';
import PlayerService from '@/services/player';
import { useSpotifyPlayer, usePlaybackState, usePlayerDevice } from 'react-spotify-web-playback-sdk';
import { usePlayerStore } from '@/context/player';
import { msToTime } from '@/utils';
import Button from '~~/Button';
import Icon from '~~/Icon';

const Player = () => {
  const player = useSpotifyPlayer();
  const playbackState = usePlaybackState();
  const device = usePlayerDevice();
  const [shuffle, repeat] = usePlayerStore((state) => [state.shuffle, state.repeat]);

  useEffect(() => {
    if (device?.device_id === undefined) return;

    PlayerService.player(device.device_id);
  }, [device?.device_id]);

  if (!player || !playbackState) return null;

  return (
    <section className="flex flex-col items-center justify-center col-span-4 ml-4">
      <div className="flex gap-4 mb-2">
        <div className="flex gap-2">
          <Button
            icon="shuffle"
            variant={playbackState.shuffle ? 'active' : 'primary'}
            onClick={() => shuffle(playbackState.shuffle)}
          />
          <Button icon="previous" onClick={() => player.previousTrack()} />
        </div>
        <button
          type="button"
          aria-label="play"
          className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full"
          onClick={() => player.togglePlay()}
        >
          <Icon name={playbackState.paused ? 'play' : 'pause'} />
        </button>
        <div className="flex gap-2">
          <Button icon="next" onClick={() => player.nextTrack()} />
          <Button
            icon={playbackState.repeat_mode === 2 ? 'repeat-track' : 'repeat'}
            variant={playbackState.repeat_mode === 0 ? 'primary' : 'active'}
            onClick={() => repeat(playbackState.repeat_mode)}
          />
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
