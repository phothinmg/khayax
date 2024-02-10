import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
export default{
    input: 'index.jsx',
    output: {
		format: 'es',
		file: 'index.js',
        sourcemap: true
	},
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
}