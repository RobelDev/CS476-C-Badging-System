const express = require("express");
const Badge = require("../../model/Badge");
const router = express.Router();
const User = require("../../model/User");
const middleware = require("../../middleware");
// const Badge = require("../../model/Badge");


router.post("/create", middleware, async (req, res) => {

    // const user = await User.findById(req.user.id).select("-password");

    const {
        receiver,
        reason,
        badgeName,


    } = req.body;

    let userG = await User.findOne({ email: receiver });
    let me = await User.findById(req.user.id);

    

    if (!userG) {
        console.log("no user found");
        return res.send("no user")
    }
    
    // let badges = await Badge.find( {user : userG.id });


    if( me.email == receiver ){
        console.log("you cant send badges to your self")
        // return res.send("you cant send badges to your self")
    }

    const field = {
        user: userG.id,
        // sender: ,
        receiver,
        reason,
        badgeName,
    }

    var arr = [];

    //  badges && badges.map(bn => arr.push(bn.badgeName));
    
     
    try {

        // const resp = badges && badges.map( bn => { bn.badgeName == (badgeName) ? "exists" : "no"} );


        // if(arr.indexOf(badgeName) > -1){
        //     console.log("Badge already exists/given ");
        //     return res.send("Badge already exists");
        //  }
        //  else{

         
            const badgeToBeGiven = new Badge(field);

            await badgeToBeGiven.save();

            return res.json(badgeToBeGiven);
         //}

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");

    }

});


// add kudos bank \
// work on this one /////////////////////////////////////////////////
router.post("/kudos", middleware, async (req, res) => {




    const kudosReciever = await User.find(req.body.email).select("-password");

    // const {
    //     kudosBank,
    // } = req.body;

    // const field = {
    //     user: req.user.id,
    //     kudosBank,
    // }

    try {


        const myBadge = await Badge.find({
            user: req.user.id,
        });

        badges.kudosBank += req.body;


        res.json(badges);

    } catch (error) {


        console.error(error.message);
        res.status(500).send("Server Error");

    }

});

//get a personalized list of badges
router.get("/me", middleware, async (req, res) => {

    try {
        const badges = await Badge.find({
            user: req.user.id,
        }).populate("user").sort({ date: -1 });

        if (!badges) {
            return res.status(400).json({ msg: "there is no list of badges" });
        }
        res.json(badges);

    } catch (error) {


        console.error(error.message);
        res.status(500).send("Server Error");

    }
})


// get all badges

router.get("/all", async (req, res) => {

    try {
        const allBadges = await Badge.find().sort({ date: -1 });

        res.json(allBadges);

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Server Error");
    }
})


// get a single badge

router.get("/me/:badge_id", async (req, res) => {

    try {

        const badge = await Badge.findById(req.params.badge_id).populate("user");

        if (!badge) {
            return res.status(400).json({ msg: "No property found" });
        }

        res.json(badge);

    } catch (error) {


        console.error(error.message);
        res.status(500).send("Server Error");

    }
})


module.exports = router;