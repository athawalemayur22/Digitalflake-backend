const JWT = require("jsonwebtoken");

exports.ensureAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({
      message: "Unauthorized, JWT token is require",
    });
  }
  try {
    const decoded = JWT.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Unauthorized, JWT token is wrong or expired",
    });
  }
};
