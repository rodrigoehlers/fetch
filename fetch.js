const codes = require('./codes');

function ResponseError(code, status, body) {
  this.code = code;
  this.status = status || codes[code] || 'Unkown Code';
  this.body = body;
}

const handler = async res => {
  if (!res.ok) {
    let body;
    try {
      body = await res.json();
    } catch (e) {}
    throw new ResponseError(res.status, res.statusText, body);
  }

  return res;
};

module.exports = (...args) => fetch.apply(null, args).then(handler);
