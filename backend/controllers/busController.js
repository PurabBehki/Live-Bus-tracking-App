const Bus =require("../models/Bus");

const createBus= async(req,res)=>{
    try{
        const bus=await Bus.create(req.body);
        res.status(201).json(bus);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const getBuses = async(req, res) => {
    console.log("Get /bus hit")
    try {
        const { source, destination } = req.query;
        const filter = {};
        if (source) filter.source = source;
        if (destination) filter.destination = destination;
        const buses = await Bus.find(Object.keys(filter).length ? filter : {});
        res.status(200).json(buses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBusById = async(req, res) => {
  try {
    console.log("Requested ID:", req.params.id);

    const bus = await Bus.findById(req.params.id);

    console.log("Bus found:", bus);

    res.status(200).json(bus);
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const searchBus = async(req, res) => {
    try {
        const { source, destination } = req.query;
        const buses = await Bus.find({ source, destination });
        res.status(200).json(buses);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBus = async(req, res) => {
  try {
    const updatedBus = await Bus.findByIdAndUpdate(req.params.id,req.body,{ new: true });
      res.status(200).json(updatedBus);
    }
    catch (error) {
    res.status(500).json({message: error.message});
  }
};
module.exports={
    createBus,
    getBuses,
    searchBus,
    updateBus,
    getBusById
};