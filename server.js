const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 8080;


require("./server/config/pets.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


const AllRoutes = require("./server/routes/pets.routes");
AllRoutes(app);

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));
