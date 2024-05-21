import * as dartSass from "sass"
import gulpSass from "gulp-sass"
import prettier from "gulp-prettier"

const sass = gulpSass(dartSass)

export const styles = () => {
  return app.gulp
    .src(app.paths.srcScss)
    .pipe(sass())
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
    .pipe(app.gulp.dest(app.paths.buildCssFolder))
    .pipe(app.browserSync.stream())
}
