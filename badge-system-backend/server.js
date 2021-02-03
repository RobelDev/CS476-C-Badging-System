const express = require("express");
// const { connect } = require("http2");
const connect = require("./connect");


// Application configuration
const app = express();
const PORT = process.env.PORT || 5000;


// Middlewares

app.use(express.json());

// connect();
// connect();
// app.use(morggan("dev"));
// app.use(express.json());

// app.get("/", (req, res) => res.send("State Farm Capstone Project runinggggggg"));

// app.use("/api/", require("./routes/"));
// app.use("/", console.log("hello"));

app.use("/auth", require("./routes/api/auth"));
// app.use("/badge", require("./routes/api/badge"));


// Listening
app.listen(PORT, () => console.log(`Server listening on localhost: ${PORT}`));