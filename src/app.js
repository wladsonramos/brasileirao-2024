import table2024 from "./table.js";
import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(table2024);
});

app.get('/:acronym', (req, res) => {
    const informedAcronym = req.params.acronym.toUpperCase();
    const team = table2024.find(infoTeam => infoTeam.acronym === informedAcronym);
    if (!team) {
        res.status(404).send("Time não encontrado");
        return;
    }
    res.status(200).send(team);
});

app.put('/:acronym', (req, res) => {
    const informedAcronym = req.params.acronym.toUpperCase();
    const selectedTeam = table2024.find((t) => t.acronym === informedAcronym);
    const fields = Object.keys(req.body);

    for(let field of fields) {
        selectedTeam[field] = req.body[field];
    }

    res.status(200).send(selectedTeam);
});

app.post('/', (req, res) => {
    const newTeam = req.body;
    table2024.push(newTeam);
    res.status(200).send(newTeam);
});

app.delete('/:acronym', (req, res) => {
    const informedAcronym = req.params.acronym.toUpperCase();
    const selectedTeamIndex = table2024.findIndex((t) => t.acronym === informedAcronym);
    const teamRemoved = table2024.splice(selectedTeamIndex, 1);
    res.status(200).send(teamRemoved);
});

app.listen(3000, () => console.log("Server is running"));