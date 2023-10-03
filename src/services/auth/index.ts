import { api } from '@/api';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export default class AuthService {
  static async getToken() {
    const data = {
      grant_type: 'client_credentials',
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET
    };
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    return (await api.post<TokenResponse>('https://accounts.spotify.com/api/token', data, { headers })).data;
  }
}
