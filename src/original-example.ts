// Using an example from https://formatjs.github.io/docs/polyfills/intl-durationformat
// Only added .js suffix, because otherwise I get Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './polyfill' is not defined by "exports"
import '@formatjs/intl-durationformat/polyfill.js'

// This throws src/index.ts:5:28 - error TS2339: Property 'DurationFormat' does not exist on type 'typeof Intl'.
const formatter = new Intl.DurationFormat('en', {
    style: 'long',
    hours: 'numeric',
    minutes: 'numeric',
    seconds: 'numeric',
})

const output = formatter.format({hours: 3, minutes: 25, seconds: 7})
console.log(output);
