const express = require("express");
const router = express.Router();
const User = require("../../model/User");
const middleware = require("../../middleware");
const jwt = require("jsonwebtoken");


// this one needs a middleware
// see another option
router.get("/signin", middleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            res.json({ msg: "User not found" });
        }

        res.json({ user, msg: "user signed in" });
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
}
);

router.post("/signin", async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ msg: "User not found" });
        }

        // const confirmPassword = (password == user.password);

        if (password != user.password) {
            return res.json({ msg: "Password doesnot match" });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            "jwtSecretKeyhjajdbjfascmfgbsdjgsjbgjsgbjc",
            (error, token) => {
                if (error) throw error;
                res.json({ token, msg: "Signed in successfully" });
            }
        );

    } catch (error) {

        console.log(error);
        res.status(500).send("Server Error");
    }
});



router.post("/register", async (req, res) => {

    const { email, password } = req.body;


    try {

        let user = await User.findOne({ email });

        if (user) {
            return res.json({ msg: "user already exists!" })
        }

        user = new User({ email, password });

        user.email = email;
        user.password = password;

        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(payload, "jwtSecretKeyhjajdbjfascmfgbsdjgsjbgjsgbjc");


        res.json(token);

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Server Error");

    }
});

router.get("/getMyKudos", middleware, async (req, res) => {

    const user = await User.findById(req.user.id);

    if (!user) {
        return res.send("No found user")
    }

    try {
        res.json(user);

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Server Error");
    }
});


router.post("/giveKudos", middleware, async (req, res) => {


    const { email, kudos } = req.body;

    let kudosReciever = await User.findOne({ email }).select("-password");

    const giver = await User.findById(
        req.user.id,
    );
    if (!giver) {
        return res.send("No signed in user testtt")
    }

    if(giver.email == email){
        console.log("Can not send kudos to yourself!")
        return res.send("Can not send kudos to yourself!");

    }
    if (!kudosReciever) {
        return res.send("No found user with that email")
    }

    try {

        if (giver.kudosBank >= parseInt(kudos)) {


            giver.kudosBank -= parseInt(kudos);


            kudosReciever.kudosBank += parseInt(kudos);

            await giver.save();

            await kudosReciever.save();

            return res.json(giver);
            // res.send("kudos sent");


        }
        else {
            res.send("not sufficient kudos");
        }

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Server Error");

    }

});

router.post("/spendkudos", middleware, async (req, res) => {

    const { kudos } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
        return res.send("No found user")
    }

    try {


        if (user.kudosBank >= kudos) {


            user.kudosBank -= kudos;

            // await giver.save();

            // kudosReciever.kudosBank +=  kudos;

            await user.save();



            res.json(user);
        }

    } catch (error) {

        console.error(error.message);
        res.status(503).send("Server Error");

    }

});


module.exports = router;