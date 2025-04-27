import StyleDictionary from "style-dictionary";
import { formats, transformGroups } from "style-dictionary/enums";

const getBuildpath = (platform, isDev) => {
  if (Boolean(isDev)) {
    return `../../packages/interfaces/ui-core/src/${platform}/`;
  }
  return `../../packages/interfaces/ui-core/dist/${platform}/`;
};

const sdThemeGen = async (theme, isDev) => {
  const themeName = theme + " " + `${isDev ? "dev" : "prod"}`;
  const sd = new StyleDictionary({
    log: {
      'verbosity': 'verbose'
    },
    source: [`../../packages/**/tokens/${theme}.json`],
    include: [
      // NOTE: all tokens that intended to be used globally
      "src/tokens/*.json",
      // NOTE: specified to declare the theme needs
      `src/tokens/main.${theme}.json`,
    ],
    platforms: {
      [themeName]: {
        transformGroup: transformGroups.css,
        buildPath: getBuildpath(theme, isDev),
        options: {
          outputReferences: true,
          formatting: {
            fileHeaderTimestamp: true,
          },
          selector: `:root[data-theme='${theme}']`,
        },
        files: [
          {
            destination: "index.css",
            format: formats.cssVariables,
          },
          {
            destination: "font.css",
            format: formats.cssFonts,
          },
        ],
      },
    },
  });

  await sd.buildAllPlatforms();
};

const themes = ["light", "dark"];

await Promise.all([
  ...themes.map((theme) => sdThemeGen(theme, 0)),
  ...themes.map((theme) => sdThemeGen(theme, 1)),
]);

console.log("done");
