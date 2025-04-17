import StyleDictionary from "style-dictionary";
import { formats, transformGroups } from "style-dictionary/enums";

const getBuildpath = (platform, isDev) => {
  if (Boolean(isDev)) {
    return `../../packages/interfaces/ui-core/src/${platform}/`;
  }
  return `../../packages/interfaces/ui-core/dist/${platform}/`;
};

const themes = ["light", "dark"];

const generator = async (isDev) => {
  const sd = new StyleDictionary({
    log: {
      verbosity: "silent",
      warnings: "warn",
    },
    source: themes.map((theme) => `../../packages/**/tokens/${theme}.json`),
    platforms: {
      light: {
        transformGroup: transformGroups.css,
        buildPath: getBuildpath("light", isDev),
        options: {
          formatting: {
            fileHeaderTimestamp: true,
          },
          selector: ":root[data-theme='light']",
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
      dark: {
        transformGroup: transformGroups.css,
        buildPath: getBuildpath("dark", isDev),
        options: {
          formatting: {
            fileHeaderTimestamp: true,
          },
          selector: ":root[data-theme='dark']",
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

await Promise.all([generator(1), generator(0)]);
console.log("done");
