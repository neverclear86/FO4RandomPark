/**
 * pugファイルをdocsフォルダに変換して配置
 * tagファイルを変換してdocs/tags/tags.jsに配置
 * electronを起動
 */

const gulp = require('gulp')
const riot = require('gulp-riot')
const pug = require('gulp-pug')
const concat = require('gulp-concat')
const fs = require('fs');
const path = require('path');
const uglify = require('gulp-uglify');


var srcDir = 'src'
var libDir = 'build'

function getDirs(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory()
    })
}

gulp.task('build:pug', () => {
  gulp.src('src/views/**/[^_]*.pug')
  .pipe(pug())
  .pipe(gulp.dest('docs/'))
})

gulp.task('build:riot', () => {
  var tagDir = 'src/tags/'
  var dirs = getDirs(tagDir)

  dirs.map(dir => {
    return gulp.src(path.join(tagDir, dir, '/**/*.tag'))
      .pipe(riot({
        template: 'pug',
      }))
      .pipe(concat(dir + '.js'))
      .pipe(uglify())
      .pipe(gulp.dest('docs/tags/'))
  })

  gulp.src(path.join(tagDir, '/*.tag'))
    .pipe(riot({
      template: 'pug',
    }))
    .pipe(uglify())
    .pipe(gulp.dest('docs/tags/'))
})

gulp.task('build:js', () => {
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('docs/js/'))
})

gulp.task('build', ['build:pug', 'build:riot', 'build:js'], () => {
  gulp.watch(['src/views/**/*.pug'], ['build:pug'])
  gulp.watch(['src/tags/**/*.tag'], ['build:riot'])
  gulp.watch(['src/js/**/*.js'], ['build:js'])
})
