const express = require("express");
const router = express.Router();
const service = require("../service/products");

router.get("/", async (req, res) => {
  return service.findProducts(req,res);
});

router.get("/:id", async (req, res) => {
  return service.findProduct(req,res);
});

router.post("/", async (req, res) => {
  return service.newProduct(req,res);
});

router.put("/:id", async (req, res) => {
  return service.editProduct(req,res);
});

router.delete("/:id", async (req, res) => {
  return service.deleteProduct(req,res);
});

module.exports = router;
