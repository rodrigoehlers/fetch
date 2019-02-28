const codes = require('./codes');

function ResponseError(code, status) {
  this.code = code;
  this.status = status || codes[code] || 'Unkown Code';
}

const handler = res => {
  if (!res.ok) throw new ResponseError(res.status, res.statusText);
  return res;
};

module.exports = (...args) => fetch.apply(null, args).then(handler);
