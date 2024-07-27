 
const Order =require("../models/Order.js");
const jwt = require("jsonwebtoken");

const createOrder = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "secret");
    const { books, total } = req.body;

    if (!books || !total) {
      return res.status(400).json({ message: "Books and total are required" });
    }

    const order = await Order.create({ user: decoded.id, books, total });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: error.message });
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "secret");
    const orders = await Order.find({ user: decoded.id }).populate(
      //means array me book ke ander jo id hai usme uska json bhar dega 
      " books.Book"//books ke ander jo book array hai usko populate kr rhe hai
    );
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createOrder, getOrdersByUser };
