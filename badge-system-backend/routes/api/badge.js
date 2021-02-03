const express = require("express");
const Badge = require("../../model/Badge");
const router = express.Router();
const User = require("../../model/User");
// const Badge = require("../../model/Badge");


router.post("/badge", async ( req, res) => {
    
    const user = await User.findById(req.user.id).select("-password");

    const {
        name,
        title, 
        department,
        location,
        accomplishment,
        kudosBank,
        badges,

    } = req.body;

    const field = {
        user: req.user.id,
        name,
        title, 
        department,
        location,
        accomplishment,
        kudosBank,
        badges,
    }

    try {

        const badgeToBeGiven = new Badge(field);

        await badgeToBeGiven.save();

        res.json(badgeToBeGiven);

    } catch (error) {

        
      console.error(error.message);
      res.status(500).send("Server Error");
        
    }

});


// add kudos bank \
// work on this one /////////////////////////////////////////////////
router.post("/badge", async ( req, res) => {
    
    const user = await User.findById(req.user.id).select("-password");

    // const {
    //     kudosBank,
    // } = req.body;

    // const field = {
    //     user: req.user.id,
    //     kudosBank,
    // }

    try {

        
        const badges = await Badge.find({
            user: req.user.id,
        });
        
        badges.kudosBank +=  req.body;


        res.json(badges);

    } catch (error) {

        
      console.error(error.message);
      res.status(500).send("Server Error");
        
    }

});

//get a personalized list of badges
router.get("/me", async (req, res) => {

    try {

        const badges = await Badge.find({
            user: req.user.id,
        }).populate("user").sort({date: -1});

        if(!badges){
            return res.status(400).json({ msg : "there is no list of badges"});
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
        const allBadges = await Badge.find().sort({date:-1});

        res.json(allBadges);
        
    } catch (error) {
        
      console.error(error.message);
      res.status(500).send("Server Error");
    }
})


// get a single badge

router.get("/me/:badge_id", async ( req, res) => {

    try {

        const badge = await Badge.findById(req.params.badge_id).populate("user");

        if(!badge){
            return res.status(400).json({ msg : "No property found"});
        }

        res.json(badge);
        
    } catch (error) {

        
      console.error(error.message);
      res.status(500).send("Server Error");
        
    }
})


module.exports = router;