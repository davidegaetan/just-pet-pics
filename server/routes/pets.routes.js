const ProductController = require("../controller/pets.controller");

module.exports = app => {
    app.get("/api/pets/", ProductController.findAllPets);
    app.get("/api/pets/:id", ProductController.findOnePet);
    app.post("/api/pets/new", ProductController.insertNewPet);
    app.put("/api/pets/:id/edit", ProductController.editPet);
    app.delete("/api/pets/:id/adopt", ProductController.adoptPet);
}