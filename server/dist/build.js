"use strict";
exports.__esModule = true;
// src/tooling/esbuild/build.ts
var esbuild_1 = require("esbuild");
// console.log('beleaua');
// server build
(0, esbuild_1.build)({
    entryPoints: ['../server/src/index.ts'],
    outfile: '../../dist/index.js',
    platform: 'node',
    target: 'es2017',
    bundle: true
})["catch"](function () { return process.exit(1); });
// client build
// build({
// 	entryPoints: ['../platform/client/app.tsx'],
// 	outfile: '../../dist/app.js',
// 	platform: 'browser',
// 	target: 'es2017',
// 	bundle: true,
// }).catch(() => process.exit(1));
