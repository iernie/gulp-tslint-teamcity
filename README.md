# gulp-tslint-teamcity
Typescript lint reporter for gulp-tslint that works with tslint-teamcity-reporter. A special thanks to
[Sindre Sorhus](https://github.com/sindresorhus) for the reporter design, to
[Panu Horsmalahti](https://github.com/panuhorsmalahti) for creating
[gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint) and to
[pteropus](https://github.com/pteropus) for [gulp-tslint-stylish](https://github.com/pteropus/gulp-tslint-stylish) which is what I used as a reference.

Installation
------------
Note that this is designed to accept output from gulp-tslint, which must be installed separately.
To install this package:

```
npm install gulp-tslint-stylish
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
