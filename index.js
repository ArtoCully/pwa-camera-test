const express = require('express');
const serveStatic = require('serve-static');

const app = express();

app.use(serveStatic('public', {'index': ['index.html']}));

const server = app.listen(3000, () => {
    console.log('Local:', 'http://localhost:' + server.address().port);
    // require('./socket-io')(server);
});