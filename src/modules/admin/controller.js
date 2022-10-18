import jwt from "../../lib/jwt.js";
import model from "./model.js";

const LOGIN = (req, res) => {
  try {
    let admin = model.LOGIN(req.body);
    if (!admin) {
      return res
        .status(401)
        .json({ status: 401, message: "No hacking bruh", token: null });
    }
    return res.status(200).json({
      status: 200,
      message: "Hello again!",
      token: jwt.sign({ adminId: admin.admin_id }),
    });
  } catch (error) {
    console.log(error);
  }
};

export default { LOGIN };
