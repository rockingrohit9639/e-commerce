const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY.toString()
    ),
  });

  try {
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    );

    const originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalpassword !== req.body.password) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.idAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    return res.status(200).json({...others, accessToken});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
