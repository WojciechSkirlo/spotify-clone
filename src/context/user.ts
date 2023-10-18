import { create } from 'zustand';

type State = {
  isCollapsed: boolean;
};

type Action = {
  setUser: () => void;
};

const useUserStore = create<State & Action>(() => ({
  isCollapsed: false,
  setUser: () => ({})
}));

export { useUserStore };
