const test = require("flug");
const declareVars = require("./declare-vars");

test("simple", ({ eq }) => {
  const vars = [ { name: 'A', value: 1 }, { name: 'B', value: 2 }];
  const code = declareVars({ vars });
  eq(code, "const A=1,B=2;");
});

test("no-semicolon", ({ eq }) => {
  const vars = [ { name: 'A', value: 1 }, { name: 'B', value: 2 } ];
  const code = declareVars({ vars, semi: false });
  eq(code, "const A=1,B=2");
});

test("comment", ({ eq }) => {
  const vars = [ { name: 'A', value: 1 }, { name: 'B', value: 2 } ];
  const code = declareVars({ vars, comment: true });
  eq(code, "/* declarations */\nconst A=1,B=2;");
});

test("custom comment", ({ eq }) => {
  const vars = [ { name: 'A', value: 1 }, { name: 'B', value: 2 } ];
  const code = declareVars({ vars, comment: 'test comment' });
  eq(code, "/* test comment */\nconst A=1,B=2;");
});

test("pretty", ({ eq }) => {
  const vars = [ { name: 'A', value: 'Apple' }, { name: 'B', value: 'Bear Corn' }, { name: 'C', value: "Cactus" } ];
  const code = declareVars({ vars, pretty: true });
  eq(code, "const A='Apple';\nconst B='Bear Corn';\nconst C='Cactus';");
});

test("expressions", ({ eq }) => {
  const vars = [ { name: 'A', value: 1 }, { name: 'B', value: 'A+2', raw: true }];
  const code = declareVars({ vars });
  eq(code, "const A=1,B=A+2;");
});