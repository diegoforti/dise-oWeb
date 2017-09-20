'use-strict';
var gulp = require('gulp');
var gulpSass = require('gulp-sass'); 
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
    .pipe(gulpSass.sync().on('error', gulpSass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch("*.html").on('change', browserSync.reload);
    //gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch('./sass/**/*.scss', ['sass']);
});
