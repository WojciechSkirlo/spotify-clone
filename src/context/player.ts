import { create } from 'zustand';
import PlayerService from '@/services/player';

type Action = {
  play: (context_uri?: string, position?: number) => void;
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
  }
}));

export { usePlayerStore };
