const gulp = require('gulp');
const concat = require('gulp-concat');
const shell = require('gulp-shell');
const clean = require('gulp-clean');
const merge = require('merge-stream');
const process = require('process');

const fileNameMd = "oauth2-session.md"
const fileNamePdf = "oauth2-session.pdf"

function generatePresentation(orderedFiles, mdName, pdfName)
{
   return gulp.src(orderedFiles, { base: '.' })
      .pipe(concat(mdName, { newLine: "\n\n\n\n" }))
      .pipe(gulp.dest('dist'))
}

gulp.task('copy-images', function() {
   return gulp.src('presentations/images/*.*')
      .pipe(gulp.dest('dist/images'));
});

gulp.task('build-presentation', function() {
   var orderedFiles = [
      'presentations/cover.md',
      'presentations/intro.md',
      'presentations/what-if.md',
      'presentations/oauth2.md',
      'presentations/jwt.md'
   ];

   return generatePresentation(orderedFiles,
      fileNameMd, fileNamePdf);
});

gulp.task('clean', function() {
   return gulp.src([
      'dist/*.pdf',
      'dist/*.md',
      'dist/images/*.*'
   ], { base: '.' })
   .pipe(clean({ force: true }));
});

gulp.task('present', 
   shell.task(`cd dist && reveal-md ${fileNameMd} -s "\n\n\n\n" -S "\n\n\n" -w`));

gulp.task('build-pdf', 
   shell.task(`reveal-md dist/${fileNameMd} --port 9991 -s "\n\n\n\n" -S "\n\n\n" --print dist/${fileNamePdf}`));

gulp.task('build', function(done) {
   gulp.start('default');
   gulp.start('build-pdf')
   done();
});

gulp.task('default', function(done) {
   gulp.start('build-presentation');
   gulp.start('copy-images')
   done();
});
