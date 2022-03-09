const app = require("express")();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config.env"});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8001;

// MongoDB Connection
require("./db/connection")

// Routes
app.use("/api/user", require("./Routes/user"));
app.use("/api/auth", require("./Routes/auth"));

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})