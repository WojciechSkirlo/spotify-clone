import { useCallback } from 'react';
import Cookies from 'js-cookie';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';
import NowPlaying from '@/layouts/partials/footer/components/NowPlaying';
import Player from '@/layouts/partials/footer/components/Player';
import Controls from '@/layouts/partials/footer/components/Controls';

const Footer = () => {
  const getOAuthToken = useCallback((callback: any) => callback(token), []);
  const token = Cookies.get('token');

  return (
    <footer className="h-[72px] col-span-2 grid grid-cols-10">
      <WebPlaybackSDK initialDeviceName="spotify-clone" getOAuthToken={getOAuthToken} initialVolume={0.5}>
        <NowPlaying />
        <Player />
        <Controls />
      </WebPlaybackSDK>
    </footer>
  );
};

export default Footer;
