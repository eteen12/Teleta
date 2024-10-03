import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
      plugins: {
        js: pluginJs,
        react: pluginReact,
      },
      rules: {
      
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
  ...pluginJs.configs.recommended,
  ...pluginReact.configs.flat.recommended,
};
