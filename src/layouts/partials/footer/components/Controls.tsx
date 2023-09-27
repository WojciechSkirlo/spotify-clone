import Button from '~~/Button';

const Controls = () => {
  return (
    <div className="flex items-center justify-end col-span-3">
      <Button icon="card-play" ariaLabel="Widok teraz odtwarzane" />
      <Button icon="microphone" ariaLabel="Tekst" />
      <Button icon="queue" ariaLabel="Kolejka" />
      <Button icon="device" ariaLabel="Podłącz do urządzenia" />
      <Button icon="volume" ariaLabel="Głośność" />
      <Button icon="maximize" ariaLabel="Pełny ekran" />
    </div>
  );
};

export default Controls;
