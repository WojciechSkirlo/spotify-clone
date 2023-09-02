import NowPlaying from '@/layouts/Footer/NowPlaying';
import Player from '@/layouts/Footer/Player';
import Controls from '@/layouts/Footer/Controls';

export default function Footer() {
  return (
    <footer className="h-[72px] col-span-4 flex">
      <NowPlaying />
      <Player />
      <Controls />
    </footer>
  );
}
