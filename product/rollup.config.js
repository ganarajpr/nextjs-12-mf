import resolve from "@rollup/plugin-node-resolve";
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
const externals = {
    'react' : 'React',
    'react-dom' : 'ReactDOM',
    'react-scripts': 'ReactScripts',
    '@tanstack/react-query': 'ReactQuery',
    'axios': 'axios'
  };

export default [
  {
    input: "components/index.js",
    external: Object.keys(externals),
    output: [
      {
        file: "public/productBundle.js",
        format: "esm",
        sourcemap: true,
      }
    ],
    plugins: [
      postcss({
        extract: path.resolve('public/productBundle.css'),
        sourcemap: true,
        minimize: true,
        config: './postcss.config.js'
      }),
      resolve(),
      babel({ 
        presets: ['@babel/preset-react', "@babel/preset-env"],
        babelHelpers: 'bundled' 
      })
    ],
  }
];
