var gulp = require('gulp')
var rename = require("gulp-rename");
var inlinesource = require('gulp-inline-source')
var replace = require('gulp-replace')
change = async func => {
        await gulp
            .src('./dist/**/*.html')
            .pipe(replace(/\/(\w+)\/([\w|\.]+).css"/, '$2.css" inline'))
            .pipe(replace(/\/(\w+)\/([\w|\.]+).js"/, '$2.js" inline'))
            .pipe(inlinesource())
            .pipe(rename(function(path) {
                path.dirname = path.dirname.replace(path.dirname, 'tpl')
            }))
            .pipe(gulp.dest('./dist'))
        if (func) {
            func()
        }
    }
    // html文件

gulp.task(
    'inline-tpl',
    gulp.series(done => {
        change()
        done()
    })
)