const User =require("../models/Users");
const jwt=require("jsonwebtoken");

const token =jwt.sign(
  {
    userid:User._id,
    email:User._email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);

const loginUser = async (req, res) => {
  try {
    const {email, password} =req.body;
    const user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }
    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser
};