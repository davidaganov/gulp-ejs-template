export const images = () => {
  return app.gulp
    .src([`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png,webp,svg}`], { encoding: false })
    .pipe(app.gulp.dest(app.paths.buildImgFolder))
}
