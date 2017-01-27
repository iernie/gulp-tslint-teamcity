# gulp-tslint-teamcity

[![Dependency Status](https://gemnasium.com/iernie/gulp-tslint-teamcity.svg)](https://gemnasium.com/iernie/gulp-tslint-teamcity) [![npm version](https://badge.fury.io/js/gulp-tslint-teamcity.svg)](http://badge.fury.io/js/gulp-tslint-teamcity)

Typescript lint reporter for [gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint) that works with [tslint-teamcity-reporter](https://github.com/ThaNarie/tslint-teamcity-reporter).

# <!-- DEPRECATED
Since [tslint](https://github.com/palantir/tslint) 4.X, [gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint) 7.X and [tslint-teamcity-reporter](https://github.com/ThaNarie/tslint-teamcity-reporter) 2.X you do not need this package anymore. Simply use the reporter directly using the new tslint syntax seen below. Therefore this package will not be updated anymore.
```
var gulp = require('gulp');
var tslint = require('gulp-tslint');
// tslint-teamcity-reporter is also installed

gulp.task('lint', function () {
    gulp.src('SourceFiles.ts')
      .pipe(tslint({
        formatter: 'tslint-teamcity-reporter'
      }))
      .pipe(tslint.report({ emitError: false }));
```
# -->

Installation
------------
Note that this is designed to accept output from gulp-tslint, which must be installed separately.
To install this package:

```
npm install gulp-tslint-teamcity --save-dev
```

Usage
-----

```
var gulp = require('gulp');
var tslint = require('gulp-tslint');
var teamcity = require('gulp-tslint-teamcity');

gulp.task('lint', function () {
    gulp.src('SourceFiles.ts')
      .pipe(tslint())
      .pipe(tslint.report(teamcity, {
        emitError: false
      }));
```

Credits
-------
- [Sindre Sorhus](https://github.com/sindresorhus) for the reporter design.
- [Panu Horsmalahti](https://github.com/panuhorsmalahti) for creating [gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint).
- [pteropus](https://github.com/pteropus) for [gulp-tslint-stylish](https://github.com/pteropus/gulp-tslint-stylish) which is what I used as a reference.
- [Arjan van Wijk](https://github.com/ThaNarie) for [tslint-teamcity-reporter](https://github.com/ThaNarie/tslint-teamcity-reporter) which is what is used.


License
-------
MIT
