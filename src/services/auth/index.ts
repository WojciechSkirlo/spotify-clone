import { api } from '@/api';

export default class AuthService {
  static async getToken(params: URLSearchParams) {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    return (await api.post<TokenResponse>('https://accounts.spotify.com/api/token', params, { headers })).data;
  }

  static async getProfile() {
    return (await api.get<UserProfile>('https://api.spotify.com/v1/me')).data;
  }

  static async getPlayer() {
    return (await api.get<Player>('https://api.spotify.com/v1/me/player')).data;
  }
}

export const generateCodeChallenge = async (codeVerifier: string) => {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

export const generateCodeVerifier = (length: number) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
