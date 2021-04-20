# declare-vars
Programmatically Generate Variable Declaration Code

# install
```bash
npm install declare-vars
```

# usage
# basic usage
```js
const declareVars = require("declare-vars");

const vars = [ { name: 'A', value: 1 }, { name: 'B', value: 2 }];
const code = declareVars({ vars });
// code is "const A=1,B=2;"
```

# toggling semi-colon
You can skip adding a semi-colon to the end of the declaration by setting semi to false
```js
const declareVars = require("declare-vars");

const vars = [ { name: 'A', value: 1 }, { name: 'B', value: 2 }];
const code = declareVars({ vars, semi: false });
// code is "const A=1,B=2"
```

# pretty-printing
You can separate the declarations with new lines by setting pretty to true.
```js
const declareVars = require("declare-vars");

const vars = [
  { name: 'A', value: 'Apple' },
  { name: 'B', value: 'Bear Corn' },
  { name: 'C', value: "Cactus" }
];
const code = declareVars({ vars, pretty: true});
```
code will be the following string value:
```
const A='Apple';
const B='Bear Corn';
const C='Cactus';
```