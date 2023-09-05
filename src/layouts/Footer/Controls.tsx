import IconButton from '~~/IconButton';

const Controls = () => {
  return (
    <div className="flex items-center justify-end col-span-3">
      <IconButton icon="card-play" ariaLabel="Widok teraz odtwarzane" />
      <IconButton icon="microphone" ariaLabel="Tekst" />
      <IconButton icon="queue" ariaLabel="Kolejka" />
      <IconButton icon="device" ariaLabel="Podłącz do urządzenia" />
      <IconButton icon="volume" ariaLabel="Głośność" />
      <IconButton icon="maximize" ariaLabel="Pełny ekran" />
    </div>
  );
};

export default Controls;
