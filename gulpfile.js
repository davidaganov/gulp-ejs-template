import gulp from "gulp"
import browserSync from "browser-sync"

import { paths } from "./gulp/config/paths.js"
import { clean } from "./gulp/tasks/clean.js"
import { styles } from "./gulp/tasks/styles.js"
import { scripts } from "./gulp/tasks/scripts.js"
import { images } from "./gulp/tasks/images.js"
import { resources } from "./gulp/tasks/resources.js"
import { htmlInclude } from "./gulp/tasks/html-include.js"

global.app = {
  gulp,
  browserSync,
  isProd: process.argv.includes("--build"),
  paths
}

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: `${app.paths.base.build}`
    },
    port: 3000
  })

  gulp.watch(app.paths.srcScss, styles)
  gulp.watch(app.paths.srcFullJs, scripts)
  gulp.watch(`${app.paths.srcComponentsFolder}/**/*.ejs`, htmlInclude)
  gulp.watch(`${app.paths.base.src}/**/*.ejs`, htmlInclude)
  gulp.watch(`${app.paths.srcResourcesFolder}/**`, resources)
  gulp.watch(`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png,webp,svg}`, images)
}

const dev = gulp.series(clean, htmlInclude, scripts, styles, images, resources, watcher)
const build = gulp.series(clean, htmlInclude, scripts, styles, images, resources)

export { dev, build }

gulp.task("default", dev)
