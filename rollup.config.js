
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: 'index.js',
    output: {
      file: 'build/index.js',
      format: 'cjs'
      // { file: pkg.browser, format: 'umd', name: 'MyLib' },
      // { file: pkg.main, format: 'cjs' },
      // { file: pkg.module, format: 'es' },
    },
    plugins: [
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              corejs: 3,
              modules: false,
              useBuiltIns: 'usage',
              targets: {
                node: 'current',
              },
            },
          ],
        ],
      }),
      resolve(),
      commonjs(),
    ],
  },
];
