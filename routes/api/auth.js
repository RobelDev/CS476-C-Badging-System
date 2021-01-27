const express = require("express");
const router = express.Router();

router.get("/", async (req, res) =>{
    try {
        const user = await User.findById(req.user.id).select("-password");
        
        

    }

    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }

} 
);