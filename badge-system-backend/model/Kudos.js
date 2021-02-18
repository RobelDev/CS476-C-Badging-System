const mongoose = require("mongoose");

const kudosSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },

    reseaon: {
        type: String,
    },

    kudosBank: {
        type: Number,
    },

    kudos: {
        type: Number,
    },

    
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = Kudos = mongoose.model("kudos", kudosSchema);
