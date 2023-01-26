require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SIGNATURE, SIGNATURE_EXPIRY } = process.env;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.query["x-access-token"];

  // check if token exist
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  // validate token
  jwt.verify(
    //param 1: request token string
    token, 
    //param 2: Secrete key or Public key
    JWT_SIGNATURE, 
    //param 3: other optional parameters jason object
    {},
    //param 4: callback
    (err, decoded) => {
      if (err) {
        console.log("verify > error", err);
        return res.status(401).send({ 
          error: "Unauthorized request!", 
          type: err.name, 
          message: err.message, 
        });
      }
      if (decoded) {
        console.log("verify > decoded", decoded);
        // set decoded token in request object
        req.decoded = decoded;
      }
      next();
    }
  );
};

generateToken = (req, res, next) => {
  jwt.sign(
    //param 1: Payload
    {},
    //param 2: Secrete key or Private key
    JWT_SIGNATURE,
    //param 3: other optional parameters jason object
    { expiresIn: SIGNATURE_EXPIRY },
    //param 4: callback
    (err, token) => {
      if (err) {
        //console.log("generateToken > error", err);
        return res.status(401).send({ 
          error: "Unauthorized request!", 
          type: err.name, 
          message: err.message, 
        });
      }
      if (token) {
        console.log("generateToken > token", token);
        return res.status(200).send({ token });
      }
      next();
    }
  );
};

const jwtAuth = {
  verifyToken,
  generateToken,
};

module.exports = jwtAuth;
