/**
 * pugファイルをdocsフォルダに変換して配置
 * tagファイルを変換してdocs/tags/tags.jsに配置
 * electronを起動
 */

const gulp = require('gulp');
const riot = require('gulp-riot');
const pug = require('gulp-pug');


var srcDir = 'src';
var libDir = 'build';

gulp.task('build:pug', () => {
  gulp.src('src/views/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('docs/'));
});

gulp.task('build:riot', () => {
  gulp.src('src/tags/**/*.tag')
    .pipe(riot({
      // type: 'es6',
      template: 'pug',
    }))
    .pipe(gulp.dest('docs/tags/'));
});

gulp.task('build', ['build:pug', 'build:riot'], () => {
  gulp.watch(['src/views/**/*.pug'], ['build:pug'])
  gulp.watch(['src/tags/**/*.tag'], ['build:riot'])
});
