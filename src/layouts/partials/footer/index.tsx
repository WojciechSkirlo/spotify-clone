import NowPlaying from '@/layouts/partials/footer/components/NowPlaying';
import Player from '@/layouts/partials/footer/components/Player';

const Footer = () => {
  return (
    <footer className="grid grid-cols-10">
      <NowPlaying />
      <Player />
      <div className="items-center justify-end hidden col-span-3 lg:flex"></div>
    </footer>
  );
};

export default Footer;
