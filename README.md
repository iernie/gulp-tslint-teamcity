# gulp-tslint-teamcity
Typescript lint reporter for gulp-tslint that works with tslint-teamcity-reporter

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