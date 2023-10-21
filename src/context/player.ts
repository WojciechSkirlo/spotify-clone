import { create } from 'zustand';

type State = {
  player: Player | null;
};

type Action = {
  setPlayer: (player: Player) => void;
};

const usePlayerStore = create<State & Action>((set) => ({
  player: null,
  setPlayer: (player) => set(() => ({ player }))
}));

export { usePlayerStore };
