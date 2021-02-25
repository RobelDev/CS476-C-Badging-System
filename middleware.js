const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {

    const Token = req.header("auth-token");

  if (!Token) {
    return res.status(401).send("No given Token.");
  }

  try {
    const decode = jwt.verify(Token, "jwtSecretKeyhjajdbjfascmfgbsdjgsjbgjsgbjc");

    req.user = decode.user;
    next();
  }
   catch (error) {
    res.status(401).send( "Invalid Token" );
  }
};