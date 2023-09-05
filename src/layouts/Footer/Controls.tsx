import IconButton from '~~/IconButton';

const Controls = () => {
  return (
    <div className="flex items-center justify-end col-span-3">
      <IconButton icon="card-play" />
      <IconButton icon="microphone" />
      <IconButton icon="queue" />
      <IconButton icon="device" />
      <IconButton icon="volume" />
      <IconButton icon="maximize" />
    </div>
  );
};

export default Controls;
