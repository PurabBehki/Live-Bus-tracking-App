const mongoose=require('mongoose');

const connnectDB=async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bus_tracker");
        console.log("MongoDb Connected Successfully");
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
};
module.exports =connnectDB;