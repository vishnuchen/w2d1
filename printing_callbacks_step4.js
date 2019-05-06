var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

let buffer = "";

function DataCallBack (data) {
  console.log('Chunk Received. Length:', data.length);
  buffer += data;
}
function getHTML (options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', DataCallBack);
    response.on('end', callback);


  });
}

function printHTML () {
  console.log("buffer in the end:", buffer);
}

getHTML(requestOptions, printHTML);

