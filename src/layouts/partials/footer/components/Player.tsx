import { useEffect } from 'react';
import PlayerService from '@/services/player';
import { useSpotifyPlayer, usePlaybackState, usePlayerDevice } from 'react-spotify-web-playback-sdk';
import { usePlayerStore } from '@/context/player';
import { msToTime } from '@/utils';
import Button from '~~/Button';
import Icon from '~~/Icon';

const Player = () => {
  const player = useSpotifyPlayer();
  const playbackState = usePlaybackState(true, 1000);
  const device = usePlayerDevice();
  const [shuffle, repeat, setDeviceId] = usePlayerStore((state) => [state.shuffle, state.repeat, state.setDeviceId]);

  useEffect(() => {
    if (device?.device_id === undefined) return;

    PlayerService.player(device.device_id);
    setDeviceId(device.device_id);
  }, [device?.device_id, setDeviceId]);

  if (!player || !playbackState) return null;

  const progress = (playbackState?.position / playbackState?.duration) * 100;

  return (
    <section className="flex flex-col items-center justify-center col-span-5 mr-5 md:mr-0 md:col-span-6 lg:ml-4 lg:col-span-4">
      <div className="flex gap-2 mb-2 md:gap-4">
        <div className="flex gap-1 md:gap-2">
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
        <div className="flex gap-1 md:gap-2">
          <Button icon="next" onClick={() => player.nextTrack()} />
          <Button
            icon={playbackState.repeat_mode === 2 ? 'repeat-track' : 'repeat'}
            variant={playbackState.repeat_mode === 0 ? 'primary' : 'active'}
            onClick={() => repeat(playbackState.repeat_mode)}
          />
        </div>
      </div>
      <div className="flex items-center w-full max-w-[722px]">
        <span className="w-6 mr-2 text-xs text-right md:w-10 text-nobel tabular-nums">
          {msToTime(playbackState.position)}
        </span>
        <div className="flex items-center flex-1 h-3 group item">
          <div className="w-full h-1 rounded-full bg-tundora">
            <div
              style={{
                width: `${progress}%`
              }}
              className="h-full bg-white rounded-full group-hover:bg-malachite"
            />
          </div>
        </div>
        <span className="w-6 ml-2 text-xs text-left md:w-10 text-nobel tabular-nums">
          {msToTime(playbackState.duration)}
        </span>
      </div>
    </section>
  );
};

export default Player;
