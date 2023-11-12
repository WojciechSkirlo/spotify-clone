import { create } from 'zustand';
import PlayerService from '@/services/player';

type State = {
  deviceId: string;
};

type Action = {
  play: (context_uri: string, position?: number) => void;
  pause: () => void;
  shuffle: (state: boolean) => void;
  repeat: (repeatMode: number) => void;
  setDeviceId: (deviceId: string) => void;
};

const usePlayerStore = create<State & Action>((set, get) => ({
  deviceId: '',

  play: (context_uri, position) => {
    const data: PlayData = {
      context_uri,
      position_ms: 0
    };

    if (position) data.offset = { position };
    PlayerService.play(data, get().deviceId);
  },

  pause: () => {
    PlayerService.pause();
  },

  shuffle: (state: boolean) => {
    PlayerService.shuffle(!state);
  },

  repeat: (currentRepeatMode: number) => {
    const modes = ['off', 'context', 'track'];
    const newMode = currentRepeatMode === 0 ? 1 : currentRepeatMode === 1 ? 2 : 0;

    PlayerService.repeat(modes[newMode]);
  },

  setDeviceId: (deviceId: string) => {
    set({ deviceId });
  }
}));

export { usePlayerStore };
