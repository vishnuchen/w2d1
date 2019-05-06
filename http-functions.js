var https = require('https');

function getHTML (options, callback) {
  let buffer = "";

   function DataCallBack (data) {
    console.log('Chunk Received. Length:', data.length);
    buffer += data;
  }

  function callbackWithBuffer(){
    callback(buffer)
  }

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', DataCallBack);
    response.on('end', callbackWithBuffer);
  });
}

module.exports = {
  getHTML
}