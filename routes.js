const { verifyToken, generateToken } = require("./src/jwtAuth");
const { your_xyz_module } = require("./src/your_xyz_module");

module.exports = function (app) {
  app.use(function (req, res, next) {
    // add all valid headers which you accept from request
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/generateToken", [generateToken]);
  app.post("/your_xyz_route", [verifyToken], your_xyz_module);
};
