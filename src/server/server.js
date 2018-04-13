const path = require("path");
const express = require("express");
//const cors = require("cors");

const app = express();

// ...
//app.use(cors());

app.use(express.json());

app.use(require("./routes"));

// app.get('/', (req, res) => {
//     const title = 'Dynamic Server';

//     res.send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <meta http-equiv="X-UA-Compatible" content="ie=edge">
//             <title>${title}</title>
//         </head>
//         <body>
//             <div id="root">
//                 Server
//             </div>

//             <script src="build/bundle.js"></script>
//         </body>
//         </html>
//     `)
// });

app.use(express.static(path.join(__dirname, "../../public")));

app.listen(8888);
