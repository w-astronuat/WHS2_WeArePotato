import 'core-js/es6';
import 'core-js/es7/reflect';
import 'core-js/es7/array';
import 'classlist-polyfill';

require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
 // require('zone.js/dist/long-stack-trace-zone');
}