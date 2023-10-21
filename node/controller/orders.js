const express = require("express");
const router = express.Router();
const service = require("../service/orders");

router.get("/", async (req, res) => {
  return service.findOrders(req, res);
});

router.post("/", async (req, res) => {
  return service.newOrder(req, res);
});

router.get("/:id", async (req, res) => {
  return service.findOrder(req, res);
});

router.get("/:userId/:orderId", async (req, res) => {
  return service.findOrderByUser(req, res);
});

router.put("/:id", async (req, res) => {
  return service.editOrder(req,res);
});

module.exports = router;
