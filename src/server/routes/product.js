const express = require("express");

const store = require("../store");

const route = express.Router();

// GET /api/products

route.get("/products", (req, res) => {
  // const products = store.getProducts();
  // res.json({ products })

  store.getProducts().then(products => res.json({ products }));
});

route.get("/products/:id", (req, res) => {
  const productId = Number(req.params.id);

  store
    .getProduct(productId)
    .then(product => res.json(product))
    .catch(error => {
      res.status(404).json({ error });
    });
});

route.post("/products", (req, res) => {
  const productData = req.body;
  const newProducts = store.addProduct(productData);

  res.json({ products: newProducts });
});

module.exports = route;
