import { create } from 'zustand';

type State = {
  isCollapsed: boolean;
};

type Action = {
  toggleMenu: () => void;
};

const usePlayerStore = create<State & Action>(() => ({
  isCollapsed: false,
  toggleMenu: () => ({})
}));

export { usePlayerStore };
