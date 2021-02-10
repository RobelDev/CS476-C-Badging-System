const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },

    name: {
        type: String,
    },

    title: {
        type: String,
    },

    department: {
        type: String,
    },

    location: {
        type: String,
    },

    accomplishment: {
        type: String,
    },
    kudosBank: {
        type: Number,
    },

    badges: [
        {
            badge: {
                type: String,

            },
            
        }
    ],    
    
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = Badge = mongoose.model("badge", badgeSchema);
