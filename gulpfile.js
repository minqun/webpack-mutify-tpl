var gulp = require('gulp')
var rename = require("gulp-rename");
var inlinesource = require('gulp-inline-source')
var replace = require('gulp-replace')
/**针对资源文件使用cdn 或base64 引入方式*/
changeTplBase = async func => {
    await gulp
        .src('./dist/**/*.html')
        .pipe(replace(/<script type=\"text\/javascript\" src=\"\/\/cdn.jsdelivr.net\/npm\/eruda\"><\/script>/, ''))
        .pipe(replace(/eruda\.init\(\);/, '/***/'))
        .pipe(replace(/<img src="\/src\//, '<img src="./src/'))
        .pipe(replace(/\/(\w+)\/([\w|\.]+).css"/, '$2.css" inline'))
        .pipe(replace(/\/(\w+)\/([\w|\.]+).js"/, '$2.js" inline'))
        .pipe(inlinesource())
        .pipe(rename(function (path) {
            path.dirname = path.dirname.replace(path.dirname, 'tpl')
        }))
        .pipe(gulp.dest('./dist'))
    if (func) {
        func()
    }
}

change = async func => {
    await gulp
        .src('./dist/**/*.html')
        .pipe(replace(/<script type=\"text\/javascript\" src=\"\/\/cdn.jsdelivr.net\/npm\/eruda\"><\/script>/, ''))

        .pipe(replace(/eruda\.init\(\);/, '/***/'))
        .pipe(replace(/\/(\w+)\/([\w|\.]+).css"/, '$2.css" inline'))
        .pipe(replace(/\/(\w+)\/([\w|\.]+).css"/, '$2.css" inline'))
        .pipe(inlinesource())
        .pipe(gulp.dest('./dist'))
    if (func) {
        func()
    }
}
/**针对资源文件使用cdn 或base64 引入方式*/

gulp.task(
    'inline-tpl',
    gulp.series(done => {
        changeTplBase()
        done()
    })
)
/**针对资源文件外部引入*/

gulp.task(
    'inline-locale',
    gulp.series(done => {
        change()
        done()
    })
)