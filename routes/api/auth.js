const express = require("express");
const router = express.Router();

router.get("/signin", async (req, res) =>{
    try {
        const user = await User.findById(req.user.id).select("-password");
        
        if(!user){
            res.json({msg : "User not found"});
        }

        res.json({user, msg: "user signed in"});

    }

    catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }

} 
);

router.post("/signin", async (req, res) => {

    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if(!user){
            return res.json({msg: "User not found"});
        }

        // const confirmPassword = (password == user.password);

        if( password != user.password){
            return res.json({msg : "Password doesnot match"});
        }

        res.json({msg : "user signed-in succesfully"});
        
    } catch (error) {

        console.log(error);
        res.status(500).send("Server Error");        
    }
})



router.post("/register", async (req, res ) => {

    const {email, password} = req.body;


    try {

        let user = User.findOne({email});

        if(user){
            return res.json({msg : "user already exists!"})
        }

        user = new User({ email, password });

        user.email = email;
        user.password = password;

        await user.save();

        
        res.json({msg : "User registered"});

    } catch (error) {
        
        console.error(error.message);
        res.status(500).send("Server Error");
        
    }
})