var querystring = require('querystring');

function paramStr(str) {
  // Escapes the special shields.io characters
  return encodeURIComponent(str.replace(/\-/g,'--').replace(/_/g,'__'));
}

function url(label, value, color, urlOptions) {
  var base = 'https://img.shields.io/badge/' + paramStr(label) + '-' + paramStr(value) + '-' + color + '.svg';

  if (!urlOptions) {
    return base;
  } else {
    return base + '?' + querystring.stringify(urlOptions);
  }
}

module.exports = {
  url: url
};
