var gulp = require("gulp");
var gulpProtractor = require('gulp-protractor');
var protractor = require("gulp-protractor").protractor;
var reporter = require("gulp-protractor-cucumber-html-report");
var params = process.argv;
var args = process.argv.slice(3);
var paths = require('../paths');


gulp.task("e2e", ["build"], function () {
  return gulp.src(paths.test)
    .pipe(protractor({
      configFile: "protractor.conf.js",
      args: args
    }))
    .on("error", function (e) { throw e; });
});

gulp.task('webdriver-update', gulpProtractor.webdriver_update);
gulp.task('webdriver-standalone', ['webdriver-update'], gulpProtractor.webdriver_standalone);

gulp.task("e2e-report", function () {
  gulp.src(paths.testResultJson)
    .pipe(reporter({
      dest: paths.e2eReports
    }));
});