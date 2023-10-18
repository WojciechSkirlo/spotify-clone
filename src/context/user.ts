import { create } from 'zustand';

type State = {
  user: UserProfile | null;
};

type Action = {
  setUser: (user: UserProfile) => void;
};

const useUserStore = create<State & Action>(() => ({
  user: null,
  setUser: () => {
    console.log('set USer :))');
  }
}));

export { useUserStore };
