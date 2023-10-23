import { create } from 'zustand';

type State = {
  user: UserProfile | null;
};

type Action = {
  setUser: (user: UserProfile) => void;
};

const useUserStore = create<State & Action>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user }))
}));

export { useUserStore };
