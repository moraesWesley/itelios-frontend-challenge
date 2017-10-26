var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('css', function(){
    return gulp.src('./resource/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function(){
    gulp.src('./resource/js/*.js')
    .pipe(gulp.dest('./public/js'));

    gulp.src('./bower_components/clamp-js/clamp.js')
    .pipe(gulp.dest('./public/js'));

    gulp.src('./bower_components/jquery/dist/jquery.js')
    .pipe(gulp.dest('./public/js'));
});

gulp.task('img', function(){
    gulp.src('./resource/images/*.jpg')
    .pipe(gulp.dest('./public/images'))
});

gulp.task('html', function(){
    gulp.src('./resource/*.html')
    .pipe(gulp.dest('./public'))
});


gulp.task('watch-dev', function(){
    gulp.start('css', 'js', 'img', 'html');
    gulp.watch('./resource/**', [
        'css', 'js', 'html'
    ]);
});
