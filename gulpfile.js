var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
// var cp          = require('child_process');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var babel = require('gulp-babel');
/*gulp.task('babel', function(){
  return gulp.src(['assets/js/*.jsx'])
    .pipe(babel({
      presets: ['react']
    }))
    .pipe(gulp.dest('assets/js'));
  });
*/  
gulp.task('scripts', function() {
  return gulp.src(['assets/*.js'])
  	.pipe(sourcemaps.init())    
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('compress', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('rebuild', function () {
    browserSync.reload();
});

gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: '.'
        }
    });
});

/*gulp.task('copy', function(){
  return gulp.src('*.html')
  .pipe(gulp.dest('_build'));
})*/
/*
gulp.task('copyResources', function(){
  return gulp.src('resources/*.json')
  .pipe(gulp.dest('resources'));
})*/

gulp.task('sass', function () {
  gulp.src('assets/sass/**/*.sass')
  	.pipe(sourcemaps.init({
  		loadMaps: false,
  		debug: false
  	}))
    .pipe(sass({    
    	includePaths: ['assets/sass'],
    	outputStyle: 'nested'
    }).on('error', sass.logError))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write('/')) 
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function() {
  gulp.watch(['assets/sass/*.sass','assets/sass/**/*.sass'], ['sass']);
  //gulp.watch(['resources/*.json'], ['copyResources']);
  //gulp.watch(['assets/js/*.jsx'], ['babel']);
  gulp.watch(['assets/js/*.js'], ['scripts','compress']);
 //gulp.watch(['*.html'], ['copy']);
 // gulp.watch(['/*.jade'], ['jade']);
  gulp.watch(['*.html'], ['rebuild']);
});

gulp.task('default', ['scripts', 'watch', 'browser-sync' ]);  