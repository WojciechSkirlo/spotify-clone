export function isTrackObject(obj: Track | Episode): obj is Track {
  return 'artists' in obj;
}
