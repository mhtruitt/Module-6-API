const express = require('express');
const inventoryRoutes = require("./routes/inventory/routes");

const app = express();
const port = 8004;

app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Hello World");
})

//API Route
app.use("/api/v1/inventory", inventoryRoutes);

app.listen(port, () => console.log(`running on ${port}`));
