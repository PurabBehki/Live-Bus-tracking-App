const express = require("express");
const router = express.Router();

const {
  createBus,
  getBuses,
  searchBus,
  updateBus,
  getBusById
} = require("../controllers/busController");

router.post("/", createBus);
router.get("/", getBuses);
router.get("/search", searchBus);
router.get("/:id", getBusById);
router.put("/:id",updateBus);
module.exports = router;