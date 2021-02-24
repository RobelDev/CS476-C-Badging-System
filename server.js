const express = require("express");
// const { connect } = require("http2");
const connect = require("./badge-system-backend/connect");


// Application configuration
const app = express();


// Middlewares

app.use(express.json());

connect();
// connect();
// app.use(morggan("dev"));
// app.use(express.json());

// app.get("/", (req, res) => res.send("State Farm Capstone Project runinggggggg"));

// app.use("/api/", require("./routes/"));
// app.use("/", console.log("hello"));

app.use("/auth", require("./routes/api/auth"));
app.use("/badge", require("./routes/api/badge"));
app.use("/kudos", require("./routes/api/kudos"));

const PORT = process.env.PORT || 8000;

// Listening
app.listen(PORT, () => console.log(`Server listening on localhost: ${PORT}`));