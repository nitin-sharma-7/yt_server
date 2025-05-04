import { userModel } from "../../models/userModel.js";
import "dotenv/config";
import { generateJWT } from "../../jwt/userJWT.js";
const userVerify = async (req, res, next) => {
  try {
    const errors = [];
    const { username, password } = req.body;

    if (!username) return errors.push("username required");
    if (!password) return errors.push("password required");

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const data = await userModel.find({ username, password });

    if (!data || data.length == 0) {
      return res.status(400).json({ messsage: "user not found" });
    }

    const token = generateJWT(username, process.env.SECRET_KEY);
    return res.json({ token });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error: "server error occured" });
  }
};

export { userVerify };
