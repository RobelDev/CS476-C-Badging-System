const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },

    badgeName: {
        type: String,
    },

    reason: {
        type: String,
    },

    // accomplishment: {
    //     type: String,
    // },

    // kudosBank: {
    //     type: Number,
    // },
 
    
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = Badge = mongoose.model("Badge", badgeSchema);
