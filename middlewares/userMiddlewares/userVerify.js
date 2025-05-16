import { userModel } from "../../models/userModel.js";
import "dotenv/config";
import { generateJWT } from "../../jwt/userJWT.js";
import bcrypt from "bcrypt";
const userVerify = async (req, res, next) => {
  try {
    const errors = [];
    const { username, password } = req.body;

    if (!username) return errors.push("username required");
    if (!password) return errors.push("password required");

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const data = await userModel.find({ username }).populate("channel");
    // const data = await userModel.find({ username });
    if (!data || data.length == 0) {
      return res.status(400).json({ messsage: "user not found" });
    }
    const [newuser] = data;
    const validation = bcrypt.compareSync(password, newuser.password);

    if (validation) {
      const token = generateJWT(username, process.env.SECRET_KEY);

      return res.json({ loginState: true, newuser, token });
    } else {
      return res.json({ message: "not valid Credentials" });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error: "server error occured" });
  }
};

export { userVerify };
