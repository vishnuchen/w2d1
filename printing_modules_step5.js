var http_functions = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};



function printHTML (buffer) {
  console.log("buffer in the end:", buffer);
}

http_functions.getHTML(requestOptions, printHTML);

