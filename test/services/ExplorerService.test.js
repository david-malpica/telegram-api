const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test for ExplorerService", () => {
    test ("Test ExplorerService class", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers,"node");
        expect(explorersInNode.length).toBe(1);
    });
});