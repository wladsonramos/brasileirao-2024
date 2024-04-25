import table2024 from "./table.js";
import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.status(200).send(table2024);
});

app.get('/:acronym', (req, res) => {
    const acronym = req.params.acronym.toUpperCase();
    const team = table2024.find(infoTeam => infoTeam.acronym === acronym);
    if (!team) {
        res.status(404).send("Time não encontrado");
        return;
    }
    res.status(200).send(team);
});

app.listen(3000, () => console.log("Server is running"));