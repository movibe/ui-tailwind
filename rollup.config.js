import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import ttsc from "ttypescript";

export default {
  input: "src/index.ts", // Seu arquivo de entrada
  output: [
    {
      file: "dist/bundle.cjs.js", // CommonJS
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js", // ES Module
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      // Using ttsc to use transformers from tsconfig and parse our absolut paths
      tsconfig: `tsconfig.build.json`,
      typescript: ttsc, // It will transpile the src folder (but no change the file extension – see link: https://github.com/ezolenko/rollup-plugin-typescript2#rollup-plugin-babel)
    }),
    terser(), // Minifica o código para produção
  ],
  external: ["react", "react-native"], // Lista de dependências externas que não devem ser incluídas no bundle
};
