const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const hospitalSchema = new Schema(
    {
    
    hname:{ type: String,required: true},
    hlocation:{ type: String,required: true}, 
    nbeds:{ type: Number,required: true},
    nvents:{ type: Number,required: true},              //ventilators
    nOx:{ type: Number,required: true},                 //Oxygen cylinders
    nvax:{ type: Number,required: true},                //Vaccines
    },
    {
        timestamps: true,
});



const Hospital=mongoose.model('Hospital',hospitalSchema);

module.exports = Hospital;