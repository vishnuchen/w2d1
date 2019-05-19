var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', DataCallBack);
    response.on('end', callback);
  });
}
