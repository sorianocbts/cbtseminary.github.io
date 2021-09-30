const express = require("express");
const path = require("path");
const cors = require("cors");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const app = express();
// Allow cross-origin
app.use(cors());
app.options("*", cors());

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client/", "index.html"));
    });
}

const port = process.env.PORT || 80;
// console.log(process.env.NODE_ENV)

app.listen(port, () => console.log(`Server started on port ${port}`));