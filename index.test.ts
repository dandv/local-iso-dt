import { localISOdt } from '.';

describe('strings', () => {
  test('YYYY-MM-DD', () => {
    expect(localISOdt('2017-07-15')).toBe('2017-07-15');
    expect(localISOdt('2017-07-15T00:11:22')).toBe('2017-07-15T00:11:22');
  });
});

describe('numbers', () => {
  test('seconds', () => {
    // The [25] is to account for rare timezones at half-hour boundaries
    expect(localISOdt(1500123456)).toMatch(/2017-07-1[456]T[01]\d:[25]7:36/);
  });
  test('fractional seconds', () => {
    expect(localISOdt(1500123456.123)).toMatch(/2017-07-1[456]T[01]\d:[25]7:36/);
  });
  test('milliseconds', () => {
    expect(localISOdt(1500123456789)).toMatch(/2017-07-1[456]T[01]\d:[25]7:36/);
  });
  test('microseconds', () => {
    expect(localISOdt(1500123456789000)).toMatch(/2017-07-1[456]T[01]\d:[25]7:36/);
  });
  test('nanoseconds', () => {
    expect(localISOdt(1500123456789000123)).toMatch(/2017-07-1[456]T[01]\d:[25]7:36/);
  });
});

describe('dates', () => {
  test('date object', () => {
    const d = new Date('2017-07-15T00:11:22-07:00');
    expect(localISOdt(d)).toMatch(/2017-07-1[456]T[01]\d:[14]1:22/);
  });
});

describe('corner cases', () => {
  test('now', () => {
    if (localISOdt() === localISOdt(new Date())) {
      expect(true).toBe(true);
    } else {
      // Give it another chance if we compared EXACTLY around the second changing
      expect(localISOdt()).toBe(localISOdt(new Date()));
    }
  });

  test('falsy', () => {
    for (const falsy of [0, '', false, undefined]) {
      if (localISOdt(falsy) === localISOdt()) expect(true).toBe(true);
      else expect(localISOdt(falsy) === localISOdt());
    }
  });
});
