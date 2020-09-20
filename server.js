const http = require('http');

const server = http.createServer(function (req, res) {
    req.on('data', function (data) {
        console.log(data);
    });
    req.on('end', function() {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, 'OK');

        res.end('\{ "data": "test" }');
    });
});


server.listen(5000, (err) => {
    if (err) {
        console.log('error');
        return;

    }
    console.log('Listening on port 5000...');

});