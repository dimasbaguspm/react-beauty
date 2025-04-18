import StyleDictionary from "style-dictionary";
import { formats, transformGroups } from "style-dictionary/enums";

const getBuildpath = (platform, isDev) => {
  if (Boolean(isDev)) {
    return `../../packages/interfaces/ui-core/src/${platform}/`;
  }
  return `../../packages/interfaces/ui-core/dist/${platform}/`;
};

const sdBaseGen = async (isDev) => {
  const themeName = "base " + `${isDev ? "dev" : "prod"}`;
  const sd = new StyleDictionary({
    source: ["src/tokens/*.json"],
    platforms: {
      [themeName]: {
        transformGroup: transformGroups.css,
        buildPath: getBuildpath("base", isDev),
        options: {
          formatting: {
            fileHeaderTimestamp: true,
          },
          selector: ":root",
        },
        files: [
          {
            destination: "index.css",
            format: formats.cssVariables,
          },
          { destination: "font.css", format: formats.cssFonts },
        ],
      },
    },
  });

  await sd.buildAllPlatforms();
};

const sdThemeGen = async (theme, isDev) => {
  const themeName = theme + " " + `${isDev ? "dev" : "prod"}`;
  const sd = new StyleDictionary({
    source: [`../../packages/**/tokens/${theme}.json`],
    platforms: {
      [themeName]: {
        transformGroup: transformGroups.css,
        buildPath: getBuildpath(theme, isDev),
        options: {
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
  sdBaseGen(0),
  sdBaseGen(1),
  ...themes.map((theme) => sdThemeGen(theme, 0)),
  ...themes.map((theme) => sdThemeGen(theme, 1)),
]);

console.log("done");
