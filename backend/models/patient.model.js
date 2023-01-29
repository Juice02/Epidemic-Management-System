const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const patientSchema = new Schema(
    {
    pid:{ type: String,required: true,unique: true},
    pname:{ type: String,required: true},
    location:{ type: String,required: true},
    age:{ type: Number,required: true},
    status:{ type: String,required: true},
    p_history:{ type: String,required: true},
    },
    {
        timestamps: true,
});



const Patient=mongoose.model('Patient',patientSchema);

module.exports = Patient;