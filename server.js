const express = require("express");
const cors = require("cors")
const fs = require('fs');
const key = fs.readFileSync('./cert/CA/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('./cert/CA/localhost/localhost.crt');
const app = express();
const PORT = 8080;


require("./server/config/pets.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


const AllRoutes = require("./server/routes/pets.routes");
AllRoutes(app);

// app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));

app.get('/', (req, res, next) => {
    res.status(200).send('Hello world!');
});

const https = require('https');
const server = https.createServer({ key, cert }, app);

server.listen(PORT, () => {
    console.log(`Server is listening on https://localhost:${PORT}`);
});