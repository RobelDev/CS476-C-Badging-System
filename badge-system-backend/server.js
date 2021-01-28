const express = require("express");
// const mongoose = require("mongoose")
// const { connect } = require("http2");
const connect = require("./connect");
const app = express();

// connect();

// connect();

// app.use(morggan("dev"));

// app.use(express.json());

app.get("/", (req, res) => res.send("State Farm Capstone Project runinggggggg"));

// app.use("/api/", require("./routes/"));
// app.use("/", console.log("hello"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));