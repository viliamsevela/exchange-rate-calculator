import type { DateTimeFormatOptions } from 'luxon';
import { DateTime } from 'luxon';

const locale = 'en-US';

export const getLuxonDateTime = (input: string | Date): DateTime => {
  if (input instanceof Date) return DateTime.fromJSDate(input).setLocale(locale);
  return DateTime.fromISO(input).setLocale(locale);
};
export const dateFormat = (input: string | Date, format: string | DateTimeFormatOptions): string | null => {
  const parsedDateTime = getLuxonDateTime(input);

  if (typeof format === 'string') return parsedDateTime.toFormat(format);

  return parsedDateTime.toLocaleString(format);
};
