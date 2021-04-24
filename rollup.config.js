import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";

export default {
  input: "src/index.ts",
  output: [
    { file: main, format: "cjs" },
    { file: module, format: "es" },
  ],
  plugins: [url(), typescript()],
};
