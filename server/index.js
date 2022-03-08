const app = require("express")();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env"})

const PORT = process.env.PORT || 8001;

// MongoDB Connection
require("./db/connection")

// Routes
app.use("/api/user", require("./Routes/user"))

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})