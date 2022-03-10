const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", async (req, res) => {
  console.log(req.body.tokenId);

  try {
    const charge = await stripe.charges.create({
      amount: req.body.amount,
      currency: "inr",
      source: req.body.tokenId,
    });

    return res.json(charge);
  } catch (err) {
    console.log(err);
    return res.send("NOT OK");
  }
});

module.exports = router;
