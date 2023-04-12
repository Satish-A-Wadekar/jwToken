require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// set port, host to listen requests of
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';
const corsOptions = {
  origin: `http://${HOST}:${PORT}`,
};

// configure all middlewear
app.use(cors(corsOptions));
// parse requests of content-type = application/json
app.use(bodyParser.json());
// parse requests of content-type = application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple root route
app.get("/", (req, res) => {
  console.log("root request accepted");
  res.json({ message: "Welcome to application." });
});

// load all other routes - pass app object
require("./routes")(app);

//start app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.\nfull path is ${corsOptions.origin}`);
});
