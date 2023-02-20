const PetController = require("../controller/pets.controller");

module.exports = app => {
    app.get("/api/pets/", PetController.findAllPets);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.post("/api/pets/new", PetController.insertNewPet);
    app.put("/api/pets/:id/edit", PetController.editPet);
    app.delete("/api/pets/:id/adopt", PetController.adoptPet);
}