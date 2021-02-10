const jwt = require("jsonwebtoken");


module.exports = function (req, res, next) {
  //Get header token
  const Token = req.header("auth-token");

  if (!Token) {
    return res.status(401).send("No given Token.");
  }

  try {
    const decod = jwt.verify(Token, "jwtSecretKeyhjajdbjfascmfgbsdjgsjbgjsgbjc");


    req.user = decod.user;
    next();
  }
   catch (error) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};