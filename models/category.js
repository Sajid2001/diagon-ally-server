const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    locations: [{
        name:{
            type:String,
            required:true,
            min: 6,
            max:255
        },
        address:{
            type:String,
            required:true,
            min: 6,
             max:255
        }
    }]
    
});

const CategoryModel = mongoose.model("category", CategorySchema);
module.exports = CategoryModel;