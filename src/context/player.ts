import { create } from 'zustand';
import PlayerService from '@/services/player';

type State = {
  player: Player | null;
};

type Action = {
  setPlayer: (player: Player) => void;
  play: (context_uri?: string, position?: number) => void;
  pause: () => void;
  next: () => void;
  previous: () => void;
};

const usePlayerStore = create<State & Action>((set) => ({
  player: null,

  setPlayer: (player) => set(() => ({ player })),
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
    console.log('pause');
  },
  previous: () => {
    console.log('previous');
  },
  next: () => {
    console.log('next');
  }
}));

export { usePlayerStore };
