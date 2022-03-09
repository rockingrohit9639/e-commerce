const Cart = require("../Models/Cart");
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE Cart
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    return res.status(200).json(savedCart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE Cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    return res.status(200).json(updatedCart);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// // DELETE Cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Cart has been deleted!" });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET User Cart
router.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userid: req.params.userid });
    res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// // GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json(carts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
