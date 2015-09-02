var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpIgnore = require('gulp-ignore');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var path = require('path');
var startDevServer = require('./server').start;
var build = require('./server').build;


var templateFile = './src/Template.qextmpl';
var name = path.basename(__dirname);

gulp.task('build', function(callback){
    build(function(err, stats){
        if(err) {
          return callback(err);
        }
        callback();
    });
});

gulp.task('devServer', function(callback){
    startDevServer(function(err, server){
        if(err) {
          return callback(err);
        }
        callback();
    });
});

gulp.task('qext', function () {
  gulp.src(templateFile)
  .pipe(rename(name+'.qext'))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch(templateFile, ['qext']);
});

gulp.task('development', ['qext', 'watch', 'devServer']);
gulp.task('production', ['qext', 'build']);

gulp.task('default', ['production']);