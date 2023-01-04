const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const labSchema = new Schema(
    {
    name:{ type: String,required: true},
    password:{ type: Number,required: true},
    },
    {
        timestamps: true,
});



const Lab=mongoose.model('Lab',labSchema);

module.exports = Lab;