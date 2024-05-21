export const resources = () => {
  return app.gulp
    .src(`${app.paths.srcResourcesFolder}/**`, { encoding: false })
    .pipe(app.gulp.dest(app.paths.buildResourcesFolder))
}
