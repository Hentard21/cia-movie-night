/**
 * Voting window: Friday 10:00 – Tuesday 22:00 (local time).
 * Returns whether voting is open and optional next open/close times.
 */
const FRIDAY = 5;
const TUESDAY = 2;
const OPEN_HOUR = 10;
const CLOSE_HOUR = 22;

function toDayHour(d: Date): { day: number; hour: number } {
  const day = d.getDay();
  const hour = d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 3600;
  return { day, hour };
}

export function isVotingOpen(now: Date = new Date()): boolean {
  const { day, hour } = toDayHour(now);
  if (day === FRIDAY && hour >= OPEN_HOUR) return true;
  if (day === 6 || day === 0) return true; // Sat, Sun
  if (day === 1) return true; // Mon
  if (day === TUESDAY && hour < CLOSE_HOUR) return true;
  return false;
}

export function getNextOpen(now: Date = new Date()): Date {
  const n = new Date(now);
  n.setSeconds(0, 0);
  const { day, hour } = toDayHour(n);
  let days = 0;
  if (day < FRIDAY) days = FRIDAY - day;
  else if (day === FRIDAY && hour < OPEN_HOUR) days = 0;
  else days = 7 - (day - FRIDAY);
  n.setDate(n.getDate() + days);
  n.setHours(OPEN_HOUR, 0, 0, 0);
  return n;
}

export function getNextClose(now: Date = new Date()): Date {
  const n = new Date(now);
  n.setSeconds(0, 0);
  const { day, hour } = toDayHour(n);
  const daysUntilTuesday = (TUESDAY + 7 - day) % 7;
  const nextTue = new Date(n);
  nextTue.setDate(n.getDate() + (daysUntilTuesday === 0 && hour >= CLOSE_HOUR ? 7 : daysUntilTuesday));
  nextTue.setHours(CLOSE_HOUR, 0, 0, 0);
  return nextTue;
}
