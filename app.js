const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");

const errorController = require("./controllers/error");
const db = require("./utils/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// getting form responses
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Filtering routes
app.use("/admin", adminRoute);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
