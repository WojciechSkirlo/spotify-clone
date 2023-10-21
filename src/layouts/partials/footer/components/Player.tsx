import { msToTime } from '@/utils';
import { usePlayerStore } from '@/context/player';
import Button from '~~/Button';
import Icon from '~~/Icon';

const Player = () => {
  const [player, play, pause, previous, next] = usePlayerStore((state) => [
    state.player,
    state.play,
    state.pause,
    state.previous,
    state.next
  ]);

  if (!player || (player && !player.item)) return <></>;

  return (
    <section className="flex flex-col items-center justify-center col-span-4 ml-4">
      <div className="flex gap-4 mb-2">
        <div className="flex gap-2">
          <Button icon="shuffle" />
          <Button icon="previous" onClick={previous} />
        </div>
        <button
          type="button"
          aria-label="play"
          className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full"
          onClick={() => (player.is_playing ? pause() : play())}
        >
          <Icon name={player.is_playing ? 'pause' : 'play'} />
        </button>
        <div className="flex gap-2">
          <Button icon="next" onClick={next} />
          <Button icon="repeat" />
        </div>
      </div>
      <div className="flex items-center w-full max-w-[722px]">
        <span className="w-10 mr-2 text-xs text-right text-nobel">0:00</span>
        <div className="flex items-center flex-1 h-3 item">
          <div className="w-full h-1 rounded-full bg-tundora"></div>
        </div>
        <span className="w-10 ml-2 text-xs text-left text-nobel">{msToTime(player.item.duration_ms)}</span>
      </div>
    </section>
  );
};

export default Player;
