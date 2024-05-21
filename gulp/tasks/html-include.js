import ejs from "gulp-ejs"
import rename from "gulp-rename"
import prettier from "gulp-prettier"

export const htmlInclude = () => {
  const VIEWS_DIR = "pages/"
  const INDEX_FILE = "index"

  return app.gulp
    .src([`${app.paths.base.src}/pages/**/*.ejs`])
    .pipe(ejs())
    .pipe(
      rename((path) => {
        let newDir = path.dirname.replace(VIEWS_DIR, "")

        if (path.dirname !== VIEWS_DIR && path.dirname !== "." && path.basename !== INDEX_FILE) {
          path.dirname = newDir + "/" + path.basename
          path.basename = INDEX_FILE
        } else {
          path.dirname = newDir
        }
        path.extname = ".html"
      })
    )
    .pipe(
      prettier({
        semi: false,
        tabWidth: 2,
        printWidth: 115,
        singleQuote: false,
        trailingComma: "none",
        jsxSingleQuote: false,
        bracketSpacing: true,
        bracketSameLine: false,
        singleAttributePerLine: true
      })
    )
    .pipe(app.gulp.dest(app.paths.base.build))
    .pipe(app.browserSync.stream())
}
