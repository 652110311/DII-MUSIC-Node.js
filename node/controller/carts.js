const express = require("express");
const router = express.Router();
const service = require("../service/carts");

router.get("/", async (req, res) => {
  return service.findCarts(req, res);
});

router.post("/", async (req, res) => {
  return service.newCart(req, res);
});

router.get("/:id", async (req, res) => {
  return service.findCart(req, res);
});

router.put("/:id", async (req, res) => {
  return service.editCart(req, res);
});

router.delete("/:id", async (req, res) => {
  return service.deleteCart(req, res);
});

module.exports = router;
