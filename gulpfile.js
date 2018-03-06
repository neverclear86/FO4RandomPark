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


var srcDir = 'front'
var docDir = 'docs'

function getDirs(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory()
    })
}

gulp.task('build:pug', () => {
  gulp.src(path.join(srcDir, 'views/**/[^_]*.pug'))
  .pipe(pug())
  .pipe(gulp.dest(docDir))
})

gulp.task('build:riot', () => {
  var tagDir = path.join(srcDir, 'tags/')
  var dirs = getDirs(tagDir)

  dirs.map(dir => {
    return gulp.src(path.join(tagDir, dir, '/**/*.tag'))
      .pipe(riot({
        template: 'pug',
      }))
      .pipe(concat(dir + '.js'))
      .pipe(uglify())
      .pipe(gulp.dest(path.join(docDir, 'tags/')))
  })

  gulp.src(path.join(tagDir, '/*.tag'))
    .pipe(riot({
      template: 'pug',
    }))
    .pipe(uglify())
    .pipe(gulp.dest(path.join(docDir, 'tags/')))
})

gulp.task('build:js', () => {
  gulp.src(path.join(srcDir, 'js/**/*.js'))
    .pipe(gulp.dest(path.join(docDir, 'js/')))
})

gulp.task('build', ['build:pug', 'build:riot', 'build:js'], () => {
  gulp.watch([srcDir + '/views/**/*.pug'], ['build:pug'])
  gulp.watch([srcDir + '/tags/**/*.tag'], ['build:riot'])
  gulp.watch([srcDir + '/js/**/*.js'], ['build:js'])
})
