/* eslint-disable no-param-reassign */
/**
 * Convert the most common types of dates to the ISO8601/RFC3339 format,
 * in the local time zone, without milliseconds
 * @param {Date|Number|String} [d = Date.now()] - the date, either a Date object,
 *   or a UNIX timestamp in (milli/micro/nano)seconds
 * @return {String} ISO8601/RFC3339 `YYYY-MM-DDTHH:MM:SS` string in the local timezone
 */
export default function localISOdt(d = new Date()) {
  if (/^\d\d\d\d-\d\d-\d\d/.test(d)) return d;  // leave YYYY-MM-DD strings unchanged
  if (/^\d+\.?\d*$/.test(d)) {
    // We have a (possibly fractional) number. Date takes a millisecond argument, so
    if (d < 4102512345) d *= 1000;  // ...interpret as seconds if before 1/1/2100
    if (d > 4102512345000) d /= 1000;  // ...and as microseconds if after 1/1/2100
    if (d > 4102512345000) d /= 1000;  // ...and finally as nanoseconds
  }
  if (!(d instanceof Date)) d = new Date(d);  // parse it
  return new Date(d - d.getTimezoneOffset() * 60000)  // the offset is in minutes
    .toISOString().slice(0, -5);  // drop the .milliseconds and 'Z';
}
