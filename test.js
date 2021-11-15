const http = require('http')

http.createServer((req, res) => {
  if(req.headers['if-none-match'] === 'HELLO') {
    res.statusCode = 304;
    console.log('304');
    return res.end();
  }

  console.log('200');
  res.setHeader('ETag', 'HELLO');
  res.end('Hello, world!');
}).listen(9999, () => {
  console.log(`Server running at http://0.0.0.0:9999/`);
});
