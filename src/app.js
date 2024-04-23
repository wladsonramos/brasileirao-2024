import table2024 from "./table.js";
import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send(table2024);
});

app.listen(3000, () => console.log("Server is running"));