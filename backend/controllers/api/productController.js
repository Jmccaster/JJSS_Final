const Product = require("./../../models/products");
const data = require("./../../data/productData");
exports.seedProducts = async (request, response) => {
  try {
    await Product.remove({});
    const newProduct = await Product.insertMany(data.shoeData);
    // console.log(shoeData.shoeData);

    response.status(201).json({
      status: "success",
      data: { newProduct },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.getAllProducts = async (request, response) => {
  try {
    const allProducts = await Product.find();
    response.status(200).json({
      status: "success",
      data: { allProducts },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};

exports.getProducts = async (request, response) => {
  try {
    let category = request.params.gender;
    category = category[0].toUpperCase() + category.slice(1);

    // console.log(category);
    const allProducts = await Product.find({ gender: category });
    response.status(200).json({
      status: "success",
      data: { allProducts },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};

exports.searchProducts = async (request, response) => {
  try {
    let searchTerm = request.params.searchTerm;

    // console.log(category);
    const searchProducts = await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { color: { $regex: searchTerm, $options: "i" } },
      ],
    });
    response.status(200).json({
      status: "success",
      data: { searchProducts },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};
