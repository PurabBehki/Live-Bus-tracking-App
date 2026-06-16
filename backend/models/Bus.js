const mongoose = require("mongoose");
const busSchema = new mongoose.Schema({
    busNumber:{
        type: String,
        required: true,
    },
    source:{
        type: String,
        required: true
    },

    destination: {
        type: String,
        required: true
    },
    currentStop:{
        type: String,
        default: "",
    },
    latitude:{
        type: Number,
        default: 0,
    },
    longitude:{
        type: Number,
        default: 0,
    },
    status:{
        type: String,
        default: "On Route",
    },
    eta:{
        type: String,
        default: "",
    },
    departureTime:{ 
        type: String,
        default: "",
    },
    arrivalTime: {
        type:String,
        default: "",
    },
    fare:{
        type:Number,
        default:0,
    },
    stations:{
        type:[String],
        default:[],
    },
});
module.exports = mongoose.model("Bus", busSchema);