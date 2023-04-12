exports.your_xyz_module = (req, res) => {
  try {
    //console.log("req.decoded from your_xyz_module > ", req.decoded);
    res.status(200).send({ message: "your xyz content." });
  } catch (err) {
    return res.status(401).send({
      error: "server error",
      type: err.name,
      message: err.message,
    });
  }
};
