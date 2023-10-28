import { create } from 'zustand';
import PlayerService from '@/services/player';

type Action = {
  play: (context_uri?: string, position?: number) => void;
  pause: () => void;
  shuffle: (state: boolean) => void;
  repeat: (repeatMode: number) => void;
};

const usePlayerStore = create<Action>(() => ({
  play: (context_uri, position = 0) => {
    const data = {
      context_uri,
      offset: {
        position
      },
      position_ms: 0
    };

    PlayerService.play(data);
    console.log('play', context_uri);
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
  }
}));

export { usePlayerStore };
