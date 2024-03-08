import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import {terser} from 'rollup-plugin-terser'
import ttsc from 'ttypescript'

export default {
  input: 'src/index.ts', // Seu arquivo de entrada
  output: [
    {
      file: 'dist/bundle.cjs.js', // CommonJS
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js', // ES Module
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      // Using ttsc to use transformers from tsconfig and parse our absolut paths
      tsconfig: `tsconfig.build.json`,
      typescript: ttsc,
    }),
    terser(), // Minifica o código para produção
  ],
  external: ['react', 'react-native'], // Lista de dependências externas que não devem ser incluídas no bundle
}
