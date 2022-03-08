const app = require("express")();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env"})

const PORT = process.env.PORT || 8001;

// MongoDB Connection
require("./db/connection")

// Routes
app.use(require("./Routes/user"))
app.get("/", (req, res) => {
    return res.json({ message: "OK"})
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})