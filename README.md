# localISOdt

[![Build Status](https://travis-ci.org/dandv/local-iso-dt.svg?branch=master)](https://travis-ci.org/dandv/local-iso-dt) [![Dependency Status](https://david-dm.org/dandv/local-iso-dt.svg)](https://david-dm.org/dandv/local-iso-dt) [![devDependency Status](https://david-dm.org/dandv/local-iso-dt/dev-status.svg)](https://david-dm.org/dandv/local-iso-dt#info=devDependencies)

Convert the most common types of dates and timestamps into datetime strings in the standard `YYYY-MM-DDTHH:MM:SS` format, in the *local* timezone. This format is called [ISO8601 or RFC3339, the difference](https://stackoverflow.com/questions/522251/whats-the-difference-between-iso-8601-and-rfc-3339-date-formats/522281#522281) being that RFC3339 mandates a four-digit year and allows the 'T' to be replaced with a space. The library outputs the 'T' between the date and the time, which you can easily `.replace('T', ' ')`.

The YYYY-MM-DD date format is great because sorting alphabetically is equivalent to sorting chronologically. Other date formats, in particular the idiosyncratic `m/dd/yy` American format, do not have this property.

# Features

Supports and automatically detects the parameter being a:

* number of seconds/milliseconds/microseconds/nanoseconds since epoch
* [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object
* `YYYY-MM-DD[THH:MM:SS]` string

# Install

```sh
yarn add local-iso-dt
```

# Usage

```js
import { localISOdt } from 'local-iso-dt';  // or ...
const { localISOdt } = require('local-iso-dt');

// Prefix log messages with the current date in the
// local timezone in YYYY-MM-DDTHH:MM:SS format
console.log(localISOdt(), 'Starting job...');

// 2017-07-15T05:57:36 if you're in the Pacific (-0700) timezone
localISOdt(1500123456);
```

# License

MIT
