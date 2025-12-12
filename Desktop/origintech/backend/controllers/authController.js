import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already used" });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashed,
    });

    res.status(201).json({ message: "Registered", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(400).json({ message: "Invalid email" });

    const match = await bcrypt.compare(password, existingUser.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log(process.env.JWT_SECRET);
    res.json({ message: "Login successful", user: existingUser, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
