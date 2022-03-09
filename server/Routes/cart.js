const Cart = require("../Models/Cart");
const { verifyTokenAndAdmin, verifyToken } = require("./verifyToken");

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
// router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const updatedCart = await Cart.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );

//     return res.status(200).json(updatedCart);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// // DELETE Cart
// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     await Cart.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Cart has been deleted!" });
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

// // GET Cart
// router.get("/find/:id", async (req, res) => {
//   try {
//     const Cart = await Cart.findById(req.params.id);
//     res.status(200).json(Cart);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

// // GET ALL CartS
// router.get("/", async (req, res) => {
//   const qNew = req.query.new;
//   const qCategory = req.query.category;

//   try {
//     let Carts;

//     if (qNew) {
//       Carts = await Cart.find().sort({ createdAt: -1 }).limit(5);
//     } else if (qCategory) {
//       Carts = await Cart.find({
//         categories: {
//           $in: [qCategory],
//         },
//       });
//     } else {
//       Carts = await Cart.find();
//     }

//     return res.status(200).json(Carts);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });
