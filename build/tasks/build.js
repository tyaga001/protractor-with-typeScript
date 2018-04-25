

var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject('tsconfig.json');
var clean = require("gulp-clean");
var paths = require('../paths');

gulp.task("clean", function () {
  return gulp.src(paths.dist, { read: false }).pipe(clean());
});

gulp.task("build", ["clean"], function () {
  var tsResult = tsProject.src().pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest(paths.dist));
});