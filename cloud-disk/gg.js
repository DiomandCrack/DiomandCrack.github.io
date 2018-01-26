const http = require('http');
const fs = require('fs'); //文件读取模块
const path = require('path'); //路径处理模块

const server = http.createServer((request, response) => {
    //request 请求
    //response 响应
    let url = request.url;

    if (url === '/') {

        url = path.join(__dirname, 'index.html');
        //__dirname + `index.html` 
        //__dirname 是当前这个js文件所在的文件夹的绝对路径
    } else {
        url = path.join(__dirname, url);
    }

    fs.readFile(url, (err, data) => {
        if (err) {
            console.log(err.message);
            return;
        }
        response.end(data);
    });

    /*     response.writeHead(200, {
            'X-power-by': 'Node.js',
            'Content-Type': 'text/plain'
        }); */

    /*     response.end(url); */
});

server.listen(8080, () => {
    console.log(`The server is running at port:8080.`);
});