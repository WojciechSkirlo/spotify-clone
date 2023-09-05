import NowPlaying from '@/layouts/Footer/NowPlaying';
import Player from '@/layouts/Footer/Player';
import Controls from '@/layouts/Footer/Controls';

const Footer = () => {
  return (
    <footer className="h-[72px] col-span-4 2xl:col-span-5 grid grid-cols-10">
      <NowPlaying />
      <Player />
      <Controls />
    </footer>
  );
};

export default Footer;
