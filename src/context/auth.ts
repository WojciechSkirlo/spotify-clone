import { create } from 'zustand';
import Cookies from 'js-cookie';
import { api } from '@/api';
import AuthService, { generateCodeChallenge, generateCodeVerifier } from '@/services/auth';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const AUTH_URL = import.meta.env.VITE_SPOTIFY_AUTH_URL;
const SCOPE = import.meta.env.VITE_SPOTIFY_SCOPE;

type State = {
  alreadyFetched: boolean;
};

type Action = {
  getToken: (code: string) => Promise<TokenResponse>;
  getRefreshToken: (refresh_token: string) => Promise<TokenResponse>;
  redirectToAuth: () => Promise<void>;
  setAccessToken: (token: string, expires: number) => void;
  setRefreshToken: (token: string, expires: number) => void;
  setAlreadyFetched: (alreadyFetched: boolean) => void;
};

const useAuthStore = create<State & Action>((set, get) => ({
  alreadyFetched: false,

  setAlreadyFetched: (alreadyFetched) => set({ alreadyFetched }),

  redirectToAuth: async () => {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    Cookies.set('verifier', verifier);

    const params = new URLSearchParams();
    params.append('client_id', CLIENT_ID);
    params.append('response_type', 'code');
    params.append('redirect_uri', REDIRECT_URI);
    params.append('scope', SCOPE);
    params.append('code_challenge_method', 'S256');
    params.append('code_challenge', challenge);

    document.location = `${AUTH_URL}?${params.toString()}`;
  },

  getToken: async (code: string) => {
    const params = new URLSearchParams();
    const verifier = Cookies.get('verifier') ?? '';

    params.append('client_id', CLIENT_ID);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', REDIRECT_URI);
    params.append('code_verifier', verifier);

    const response = await AuthService.getToken(params);

    get().setAlreadyFetched(true);

    return response;
  },

  getRefreshToken: async (refresh_token: string) => {
    const params = new URLSearchParams();
    params.append('client_id', CLIENT_ID);
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refresh_token);

    const response = await AuthService.getToken(params);
    return response;
  },

  setAccessToken: (token, expires) => {
    const tokenExpires = Date.now() + expires * 1000;
    const tokenExpiresDate = new Date(tokenExpires);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    Cookies.set('access_token', token, { expires: tokenExpiresDate });
  },

  setRefreshToken: (token, expires) => {
    const tokenExpires = Date.now() + expires * 1000;
    const tokenExpiresDate = new Date(tokenExpires);

    Cookies.set('refresh_token', token, { expires: tokenExpiresDate });
  }
}));

export { useAuthStore };
