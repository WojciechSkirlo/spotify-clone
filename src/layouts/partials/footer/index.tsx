import NowPlaying from '@/layouts/partials/footer/components/NowPlaying';
import Player from '@/layouts/partials/footer/components/Player';
import Controls from '@/layouts/partials/footer/components/Controls';

const Footer = () => {
  return (
    <footer className="h-[72px] col-span-2 grid grid-cols-10">
      <NowPlaying />
      <Player />
      <Controls />
    </footer>
  );
};

export default Footer;
