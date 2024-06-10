import { create } from 'zustand';

type State = {
  accessToken: string | null;
  user: {
    email: string | null;
    name: string | null;
  };
};

type Actions = {
  setAccessToken: (token: string) => void;
  getAccessToken: () => string;

  clear: () => void;
};

const initialState = {
  accessToken: null,
  user: {
    email: null,
    name: null,
  },
};

export const useAuthStore = create<State & Actions>((set, get) => ({
  ...initialState,

  setAccessToken: (token) =>
    set((state) => ({
      ...state,
      accessToken: token,
    })),
  getAccessToken: () => get().accessToken || '',

  clear: () => {
    set(initialState);
  },
}));
