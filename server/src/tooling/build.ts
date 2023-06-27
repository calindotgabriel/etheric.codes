// src/tooling/esbuild/build.ts
import { build } from 'esbuild';

// console.log('beleaua');

// server build
build({
	entryPoints: ['../server/src/index.ts'],
	outfile: '../../dist/index.js',
	platform: 'node',
	target: 'es2017',
	bundle: true,
}).catch(() => process.exit(1));

// client build
// build({
// 	entryPoints: ['../platform/client/app.tsx'],
// 	outfile: '../../dist/app.js',
// 	platform: 'browser',
// 	target: 'es2017',
// 	bundle: true,
// }).catch(() => process.exit(1));
