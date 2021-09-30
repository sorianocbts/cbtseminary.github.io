const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
// Allow cross-origin
app.use(cors());
app.options("*", cors());


// Set static folder
app.use(express.static("client/"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/", "index.html"));
});


const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server started on port ${port}`));