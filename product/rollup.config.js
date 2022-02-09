import resolve from "@rollup/plugin-node-resolve";
import babel from '@rollup/plugin-babel';

const externals = {
    'react' : 'React',
    'react-dom' : 'ReactDOM',
    'react-scripts' : 'ReactScripts',
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
      },
    ],
    plugins: [
      resolve(),
      babel({ 
        presets: ['@babel/preset-react', "@babel/preset-env"],
        babelHelpers: 'bundled' 
      })
    ],
  }
];