import StyleDictionary from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";
// import { register } from "@tokens-studio/sd-transforms";

// register(StyleDictionary);

const sdConfig = makeSdTailwindConfig({
  type: "all",
  isVariables: true,
  source: ["tokens/*.json"],
  preprocessors: ["tokens-studio"],
  buildPath: "./src/styles/",
  formatType: "js",
});

sdConfig.platforms["css"] = {
  source: ["tokens.json"],
  transformGroup: "css",
  preprocessors: ["tokens-studio"],
  buildPath: "./src/styles/",
  files: [
    {
      destination: "tailwind.css",
      format: "css/variables",
      options: {
        outputReferences: true,
      },
    },
  ],
};

const styleDictionaryTailwind = new StyleDictionary(sdConfig);

await styleDictionaryTailwind.hasInitialized;
await styleDictionaryTailwind.buildAllPlatforms();
