import Icon from '~~/Icon';

type PlayButtonProps = {
  onClick: () => void;
};

const PlayButton = ({ onClick }: PlayButtonProps) => {
  return (
    <div className="flex items-center gap-8 py-6">
      <button
        type="button"
        aria-label="play"
        className="flex items-center justify-center text-black transition-opacity duration-300 transform rounded-full shadow-md h-14 w-14 hover:scale-105 bg-malachite"
        onClick={onClick}
      >
        <Icon name="play-smaller" size="lg" />
      </button>
    </div>
  );
};

export default PlayButton;
