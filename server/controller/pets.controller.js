const Pet = require("../models/pets.model");

module.exports.findAllPets = (req,res) => {
    Pet.find()
    .then(allPets => res.json({Pets: allPets}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.findOnePet = (req,res) => {
    Pet.findOne({_id: req.params.id})
    .then(onePet => res.json({Pets: onePet}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.insertNewPet = (req,res) => {
    Pet.create(req.body)
    .then(newPet => res.json({pet: newPet}))
    .catch(err => res.json({ err }));
}

module.exports.editPet = (req,res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedPet => res.json({Pets: updatedPet}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
}

module.exports.adoptPet = (req,res) => {
    Pet.remove({ _id: req.params.id })
    .then(result => res.json({result: result}))
    .catch(err => res.json({ error: err }));
}