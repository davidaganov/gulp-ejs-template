export const scripts = () => {
  return app.gulp
    .src(app.paths.srcFullJs)
    .pipe(app.gulp.dest(app.paths.buildJsFolder))
    .pipe(app.browserSync.stream())
}
