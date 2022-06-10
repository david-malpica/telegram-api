//Import express
const express = require("express");
// Import controller
const ExplorerController = require("./controllers/ExplorerController");
// Create express app
const app = express();
app.use(express.json());
// Create port
const port = 3000;

app.listen(port, () =>{
    console.log(`FizzBuzz API in localhost:${port}`);
});

// Principal path
app.get("/",(req,res) => {
    res.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const amountExplorers = ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission: req.params.mission, quantity: amountExplorers});
});

app.get("/v1/explorers/usernames/:mission", (req,res) => {
    const mission = req.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json(usernames);
});

app.get("/v1/fizzbuzz/:score", (req, res) => {
    const score = req.params.score;
    const number = ExplorerController.getApplyNumber(score);
    res.json({score: req.params.score, trick: number});
});