import table2024 from "./table.js";
import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send(table2024);
});

app.get('/:acronym', (req, res) => {
    const acronym = req.params.acronym.toUpperCase();
    const team = table2024.find(infoTeam => infoTeam.acronym === acronym);
    res.send(team);
});

app.listen(3000, () => console.log("Server is running"));