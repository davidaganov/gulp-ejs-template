const srcFolder = "./src"
const buildFolder = "./dist"

export const paths = {
  base: {
    src: srcFolder,
    build: buildFolder
  },
  srcImgFolder: `${srcFolder}/assets/images`,
  buildImgFolder: `${buildFolder}/assets/images`,
  srcScss: `${srcFolder}/assets/styles/**/*.scss`,
  buildCssFolder: `${buildFolder}/assets/styles`,
  srcFullJs: `${srcFolder}/assets/script/**/*.js`,
  srcMainJs: `${srcFolder}/assets/script/main.js`,
  buildJsFolder: `${buildFolder}/assets/script`,
  srcComponentsFolder: `${srcFolder}/components`,
  buildResourcesFolder: `${buildFolder}/assets/`,
  srcResourcesFolder: `${srcFolder}/assets/resources`
}
