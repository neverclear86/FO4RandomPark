const gulp = require('gulp');
// const $ = require('gulp-load-plugins')();
const electron = require('electron-connect').server.create();
// const riot = require('riot');
const riot = require('gulp-riot');
const pug = require('gulp-pug');
// const riotify = require('riotify');
// const source = require('vinyl-source-stream');


var srcDir = 'src';
var libDir = 'build';

// jsファイルのコンパイル。
// gulp.task('compile', function(){
//   return gulp.src(srcDir + '/**/*.{js,jsx}')
//     .pipe($.babel({
//       stage: 0
//     }))
//     .pipe(gulp.dest(libDir));
// });

// gulp.task('riot', () => {
//   gulp.src('src/tags/*.tag')
//     // .pipe(plumber())
//     .pipe(riot({template: "pug"}))
//     // .pipe(concat('app.js'))
//     // .pipe(babel())
//     // .pipe(uglify())
//     .pipe(gulp.dest('dist'));
// });
//
// gulp.task('pug', function() {
//   // gulp.src('src/index.pug')
//   // .pipe(pug())
//   // .pipe(gulp.dest('docs/'));
//   gulp.src('src/tags/*')
//   .pipe(pug())
//   .pipe(gulp.dest('src/tags/'));
// });

// コンパイルしてElectron起動
gulp.task('default', [], function(){
  // electron開始
  electron.start();
  // ファイルが変更されたら再コンパイル
  // gulp.watch(srcDir + '/**/*.{js,jsx}', ['compile']);
  // BrowserProcessが読み込むファイルが変更されたらRestart。
  // gulp.watch(['main.js'], electron.restart);
  // RendererProcessが読み込むファイルが変更されたらReload。
  // gulp.watch(['index.html', libDir + '/**/*.{html,js,css}'], electron.reload);
});
