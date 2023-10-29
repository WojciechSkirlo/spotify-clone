export function isTrackObject(obj: Track | Episode): obj is Track {
  return 'artists' in obj;
}

export function msToTime(durationMs: number): string {
  const minutes: number = Math.floor(durationMs / 60000); // 1 minute = 60000 ms
  const seconds: number = Math.floor((durationMs % 60000) / 1000); // 1 second = 1000 ms

  if (minutes > 59) {
    const hours: number = Math.floor(minutes / 60);
    return `${hours}:${String(minutes % 60).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else {
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }
}

export function formatDate(date: string) {
  const inputDate = new Date(date);

  const months = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];

  const day = inputDate.getUTCDate();
  const month = months[inputDate.getUTCMonth()];
  const year = inputDate.getUTCFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

export function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
