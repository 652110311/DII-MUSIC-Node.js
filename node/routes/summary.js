const express = require("express");
const router = express.Router();
const Summary = require("../models/summary");
const Product = require("../models/products");
const Order = require("../models/orders");
const User = require("../models/users");

router.get("/", async (req, res) => {
  try {
    // Calculate the counts from different tables
    const totalProducts = await Product.count();
    const totalOrders = await Order.count();
    const totalCustomers = await User.count();
    const totalSales = await Order.sum("total");

    const summaryData = {
      totalProducts,
      totalOrders,
      totalCustomers,
      totalSales,
    };

    res.json(summaryData);
    console.log(summaryData);
  } catch (error) {
    console.error("Error fetching summary data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get("/:id", async (req, res) => {
  const summary = await Summary.findOne({
    where: {
      id: req.params.id,
    },
  });

  res.json(summary);
});
// Calculate and store summary data
router.post("/", async (req, res) => {
  try {
    const { totalsale, totalorders, totalproduct, allcustomer } = req.body;

    // Create a new summary record and store it in the database
    const summary = await Summary.create({
      totalsale,
      totalorders,
      totalproduct,
      allcustomer,
    });

    // Return a success response
    return res.status(201).json(summary);
  } catch (error) {
    console.error("Error creating summary:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
});

router.put("/:id", async (req, res) => {
  const { totalsale, totalorders, totalproduct, allcustomer } = req.body;
  const summary = await Summary.findOne({
    where: {
      id: req.params.id,
    },
  });

  summary.totalsale = totalsale;
  summary.totalorders = totalorders;
  summary.totalproduct = totalproduct;
  summary.allcustomer = allcustomer;
  await summary.save();

  res.json(summary);
});

router.delete("/:id", async (req, res) => {
  await Summary.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.sendStatus(204);
});
module.exports = router;
