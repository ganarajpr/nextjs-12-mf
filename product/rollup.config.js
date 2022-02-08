import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import react from 'react';
import reactDom from 'react-dom';


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
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          react: Object.keys(react),
          'react-dom': Object.keys(reactDom)
        }
      }),
      babel({ presets: ['@babel/preset-react', "@babel/preset-env"] })
    ],
  }
];