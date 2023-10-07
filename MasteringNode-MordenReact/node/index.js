// console.log('Hello Node.js');
// global.console.log('global');
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(exports);


// console.log('blocking');
// const fs = require('fs');
// const data = fs.readFileSync(
//     './data.js','utf8'
// );
// console.log(data);

// console.log('non-blocking');
// fs.readFile(
//     './data.js','utf8',
//     function (err,dataAsyn){
//         console.log(dataAsyn);
//     }
// )



//***************lab2****************/
// const x = require('./data');
// console.log(x);

// const http = require('http');
// const os = require('os')

// http.createServer((req,res)=>{
//     res.writeHead(200);
//     res.write(os.uptime().toString());
//     res.end();
//     // console.log(req);
//     // console.log(res);
// }).listen(3000)

// console.log('listening on port 3000')
// console.log(os.uptime());


//*********************************//


// const http = require('http');
// const os = require('os');
// const data = require('./data');

// http
//   .createServer((req, res) => {
//     switch (req.url) {
//       case '/api/data':
//         res.setHeader('Content-Type', 'application/json');
//         res.writeHead(200);
//         res.write(JSON.stringify(data));
//         break;
//       case '/api/online':
//         res.setHeader('Content-Type', 'text/plain');
//         res.writeHead(200);
//         res.write(os.uptime().toString());
//         break;
//     }
//     res.end();
//   })
//   .listen(3000);

// console.log('Listening on port 3000');









