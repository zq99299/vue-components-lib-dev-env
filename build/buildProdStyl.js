var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var stylus = require('gulp-stylus')
var rename = require('gulp-rename')
var autoprefixer = require('gulp-autoprefixer')
var rm = require('rimraf')
var config = require('../config')

// 先删除目录
gulp.task('clean', function () {
  rm(config.buildStyl.output, err => {
    if (err) throw err
  })
})

// 编译
gulp.task('css', function () {
  // 把要编译的stylus文件路径作为变量配置到环境配置中
  gulp.src(config.buildStyl.source)
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename(config.buildStyl.filename))
    .pipe(gulp.dest(config.buildStyl.output))
})

// 拷贝字体文件
gulp.task('fonts', function () {
  gulp.src(config.buildStyl.sourceFonts)
    .pipe(gulp.dest(config.buildStyl.outputFonts))
})

gulp.task('default', ['clean','css', 'fonts'])

