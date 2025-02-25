import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateWebTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords don't match " });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already in use " });
    }

    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? maleProfilePic : femaleProfilePic,
    });
    if (newUser) {
      // JWT Token
      generateWebTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateWebTokenAndSetCookie(user._id, res);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      gender: user.gender,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
