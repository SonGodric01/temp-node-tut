// local dependency - use it only in this particular project - npm install <packageName>
// global dependency - use it in any project - npm/sudo(in mac) install -g <packageName>

// package.json - manifest file - stores important info about project/package
/* 
    3 ways to create package.json 
    manual approach (create it in the root, then create properties...)
    npm init (step by step ask a question, press enter to skip)
    npm init -y (everything default)
*/

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
