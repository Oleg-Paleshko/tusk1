//node server
console.log('hello ');

const { count } = require('console');
const http = require('http');

const server = http.createServer();

var counter = 0;

var n = 0;

var min = 0;

var date1 = JSON.stringify(
    [
        { id: 1, name: 'name1', surname: 'surname1', age: 20 }
        ,
        { id: 2, name: 'name2', surname: 'surname2', age: 21 }
        ,
        { id: 3, name: 'name3', surname: 'surname3', age: 22 }
        ,
        { id: 4, name: 'name4', surname: 'surname4', age: 23 }
        ,
        { id: 5, name: 'name5', surname: 'surname5', age: 24 }
    ]
)

var max = 0;
max = JSON.parse(date1).length;



server.on('request', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'application/json' });

    console.log(req.url);
    let datejsonf;
    if (n == 0) {
        n = 1;
        datejsonf = JSON.stringify(JSON.parse(date1)[0])
    }
    else {
        if (req.url == '/1') {
            if (counter <= min) {
                datejsonf = JSON.stringify(JSON.parse(date1)[counter])
            }
            else {
                counter = counter - 1;
                datejsonf = JSON.stringify(JSON.parse(date1)[counter])
            }
        }
        else if (req.url == '/2') {
            if (counter >= max - 1) {
                datejsonf = JSON.stringify(JSON.parse(date1)[counter])
            }
            else {
                counter = counter + 1;
                datejsonf = JSON.stringify(JSON.parse(date1)[counter])
            }
        }
        else {
            datejsonf = JSON.stringify({ id: 0, name: 'null', surname: 'null', age: 0 })
        }
    }

    console.log(counter);
    res.end(datejsonf);
});

server.listen(3000, '127.0.0.1');