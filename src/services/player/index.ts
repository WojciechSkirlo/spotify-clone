import { api } from '@/api';

export default class PlayerService {
  static async play(data: any) {
    return (await api.put('https://api.spotify.com/v1/me/player/play', data)).data;
  }

  static async pause() {
    return (await api.put('https://api.spotify.com/v1/me/player/pause')).data;
  }
}
