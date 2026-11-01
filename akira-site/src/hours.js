import { venue } from './content.js';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* The weekday and minute of the day in Kolkata, wherever the visitor is. */
function kolkataNow(date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type).value;
  return { day: DAYS.indexOf(get('weekday')), mins: +get('hour') * 60 + +get('minute') };
}

const hoursOn = (day) => venue.hours.find((h) => h.days.includes(day));

function clock(mins) {
  const m = mins % 1440;
  const hour = Math.floor(m / 60);
  const minute = m % 60;
  return `${hour % 12 || 12}${minute ? `:${String(minute).padStart(2, '0')}` : ''} ${hour < 12 ? 'am' : 'pm'}`;
}

/* A night that runs past midnight belongs to the day it started on. */
export function openStatus(date = new Date()) {
  const { day, mins } = kolkataNow(date);
  const yesterday = (day + 6) % 7;
  const last = hoursOn(yesterday);
  if (mins + 1440 < last.close) {
    return { open: true, label: `Open now, until ${clock(last.close)}`, row: last };
  }
  const today = hoursOn(day);
  if (mins >= today.open && mins < today.close) {
    return { open: true, label: `Open now, until ${clock(today.close)}`, row: today };
  }
  if (mins < today.open) {
    return { open: false, label: `Closed now. Opens today at ${clock(today.open)}`, row: today };
  }
  const next = hoursOn((day + 1) % 7);
  return { open: false, label: `Closed now. Opens tomorrow at ${clock(next.open)}`, row: next };
}
