const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

gulp.task('sass', function () {
  return gulp.src('src/sass/app.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('src'));
});

gulp.task('default', gulp.series('sass', ()=>{
  gulp.watch(['src/sass/*.scss'], gulp.series('sass'));
}));