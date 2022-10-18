import jwt from "../lib/jwt.js";

export default (req, res, next) => {
  try {
    let { token } = req.headers;

    if (!token) {
      return next(new Error(403, "token required"));
    }
    jwt.verify(token);

    return next();
  } catch (error) {
    return next(new Error(403, error.message));
  }
};
