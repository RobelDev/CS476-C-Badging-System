const express = require("express");
// const { connect } = require("http2");
const connect = require("./connect");


// Application configuration
const app = express();
const PORT = process.env.PORT || 5000;


// Middlewares


// connect();
// connect();
// app.use(morggan("dev"));
// app.use(express.json());



// API Endpoints
app.get("/", (req, res) => res.status(200).send("The Server is running, This is all it displays. The Front-End is not hooked up!"));

// app.use("/api/", require("./routes/"));
// app.use("/", console.log("hello"));


// Listening
app.listen(PORT, () => console.log(`Server listening on localhost: ${PORT}`));