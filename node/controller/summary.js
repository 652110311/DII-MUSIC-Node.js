const express = require("express");
const router = express.Router();
const service = require("../service/summary");


router.get("/", async (req, res) => {
  return service.findSummarys(req,res);
});

router.get("/:id", async (req, res) => {
  return service.findSummary(req,res);
});
// Calculate and store summary data
router.post("/", async (req, res) => {
  return service.newSummary(req,res);
});

router.put("/:id", async (req, res) => {
  return service.editSummary(req,res);
});

router.delete("/:id", async (req, res) => {
  return service.deleteSummary(req,res);
});
module.exports = router;
