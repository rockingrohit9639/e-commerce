const router = require("express").Router();

router.get("/user", (req, res) => {
    return res.send("This is user endpoint")
})

module.exports = router;