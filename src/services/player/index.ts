import { api } from '@/api';

export default class PlayerService {
  static async play(data: PlayData, deviceId: string) {
    return (await api.put(`me/player/play?device_id=${deviceId}`, data)).data;
  }

  static async pause() {
    return (await api.put('me/player/pause')).data;
  }

  static async player(deviceId: string) {
    return (
      await api.put('me/player', {
        device_ids: [deviceId],
        player: false
      })
    ).data;
  }

  static async shuffle(state: boolean) {
    return (await api.put(`me/player/shuffle?state=${state}`)).data;
  }

  static async repeat(state: string) {
    return (await api.put(`me/player/repeat?state=${state}`)).data;
  }
}
