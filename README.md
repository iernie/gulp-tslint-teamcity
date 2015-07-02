# gulp-tslint-teamcity
Typescript lint reporter for [gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint) that works with [tslint-teamcity-reporter](https://github.com/ThaNarie/tslint-teamcity-reporter).

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
