const CategoryModel = require('../models/category');

const findCategories = (req,res) => {
    const user_id = req.user._id
    CategoryModel.find({user_id}).sort({name:1})
    .then(result =>{
        res.json(result);
    })
    .catch(err =>{
        console.log(err);
    });
}

const addCategory = (req,res) => {
    const {name} = req.body;
    const user_id = req.user._id
    const category = new CategoryModel({name, user_id})
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
