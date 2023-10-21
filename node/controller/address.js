const express = require("express");
const router = express.Router();
const service = require("../service/address")

router.get("/", async (req, res) => {
  return service.findAddresses(req,res);
});

router.post("/", async (req, res) => {
  return service.newAddress(req,res);
});

router.get("/:id", async (req, res) => {
  return service.findAddress(req,res);
});

module.exports = router;
