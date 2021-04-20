const minQuote = require("min-quote");

const declareVars = ({ vars, comment=false, pretty=false, semi=true }) => {
  let out = "";
  if (comment) out += "/* declarations */\n";
  if (!pretty) out += "const ";
  vars.forEach(({ name, value, raw=false }, i) => {
    if (pretty) {
      if (i !== 0) out += "\n";
      out += "const " + name + "=";
    } else {
      if (i !== 0) out += ",";
      out += name + "=";  
    }
    if (typeof value === "number" || raw) {
      out += value;
    } else if (typeof value === "string") {
      out += minQuote(value);
    }
    if (pretty && semi) out += ";";
  });
  if (semi && !pretty) out += ";"
  return out;
};

module.exports = declareVars;
