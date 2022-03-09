const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const User = require("../Models/User");

const router = require("express").Router();

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY.toString()
    );
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "User has been deleted!"});
    }
    catch(err) {
        return res.status(500).json(err);
    }
})

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }
    catch(err) {
        return res.status(500).json(err);
    }
})

module.exports = router;
