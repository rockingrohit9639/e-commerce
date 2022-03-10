const app = require("express")();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "./config.env"});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8001;

// MongoDB Connection
require("./db/connection")

// Routes
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/cart", require("./Routes/cart"));
app.use("/api/order", require("./Routes/order"));
app.use("/api/products", require("./Routes/product"));
app.use("/api/user", require("./Routes/user"));
app.use("/api/checkout", require("./Routes/stripe"));

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})