const CategoryModel = require('../models/category');

const findCategories = (req,res) => {
    CategoryModel.find({}).sort({name:1})
    .then(result =>{
        res.json(result);
    })
    .catch(err =>{
        console.log(err);
    });
}

const addCategory = (req,res) => {
    const category = new CategoryModel(req.body);
    category.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
}

const deleteCategory = (req,res) => {
    const id = req.params.id
    CategoryModel.findByIdAndDelete(id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
}

const addLocation = (req,res) => {
    const id = req.params.id
    CategoryModel.updateOne({_id:id},{$push:{locations:req.body}})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
}

const removeLocation = (req,res) => {
    const id = req.params.id
    const locationID = req.params.locationID;
    CategoryModel.updateOne({_id:id},{$pull:{locations:{_id:locationID}}})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    findCategories,
    addCategory,
    addLocation,
    removeLocation,
    deleteCategory
}
