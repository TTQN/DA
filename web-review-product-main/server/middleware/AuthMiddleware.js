import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = "process.env.JWTKEY"
const authMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, secret);
      console.log(decoded)
      req.body._id = decoded?.id;
      req.body.isAdmin = decoded?.isAdmin;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleWare;
