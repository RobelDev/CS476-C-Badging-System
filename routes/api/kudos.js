const express = require("express");
const router = express.Router();
const User = require("../../model/User");
const middleware = require("../../middleware");
const jwt = require("jsonwebtoken");

// this one needs a middleware
// see another option

router.post("/kudos", middleware, async (req, res) => {
  const { email, kudos } = req.body;

  let kudosReciever = await User.findOne({ email }).select("-password");

  if (!kudosReciever) {
    return res.send("No found user with that email");
  }

  try {
    const giver = await User.find({
      user: req.user.id,
    });

    giver.kudosBank -= kudos;

    // await giver.save();

    kudosReciever.kudosBank += kudos;

    await kudosReciever.save();

    res.json(giver);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
