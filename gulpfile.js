var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('css', function(){
    return gulp.src('./resource/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function(){
    gulp.src('./resource/js/*.js')
    .pipe(gulp.dest('./public/js'))
});

gulp.task('watch-dev', function(){
    gulp.start('css', 'js');
    gulp.watch('./resource/**', [
        'css', 'js'
    ]);
});
