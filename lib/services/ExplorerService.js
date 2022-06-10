const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");

class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission.length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsername = explorersMission.map((explorer) => explorer.githubUsername);
        return explorersUsername;
    }
}

ExplorerService.filterByMission(explorers,"node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");

module.exports = ExplorerService;