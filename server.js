const express = require("express");
const path = require("path")

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


app.listen(PORT, () => console.log("Listening at http://localhost:" + PORT));
