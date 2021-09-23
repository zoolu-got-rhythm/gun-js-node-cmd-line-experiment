# how to run

## cd to root directory of project then:
* `npm install` (install npm package dependencies)
* `npx tsc` (to compile typescript files)
* `node build/index.js` (to run compiled js code)

## once compiled you should make different copies of the directory to run as 2 different peers for testing:
* `cp -r gun-js-node-cmd-line-experiment/ peer-1 && cp -r gun-js-node-cmd-line-experiment/ peer-2`
* open up 2 seperate terminal windows and run `build/index.js` from both peer root directories to start sending messages
## clean up after testing:
* `rm -r peer-1/ && rm -r peer-2/`