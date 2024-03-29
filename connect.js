const mongoose = require("mongoose");


const db = async () => {
  try {
    await mongoose.connect("mongodb+srv://Badger:statefarm@cluster0.dx4gr.mongodb.net/<dbname>?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = db;
