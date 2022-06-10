const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test for ExplorerController", () => {
    test("Test for ExplorerController class", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerController.getExplorersByMission(explorers, "node");
        expect(explorersInNode.length).toBe(0);
    });
});