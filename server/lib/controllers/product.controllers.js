import Products from "../db/models/product.model.js";

const getProduct = async (req, res) => {
  try {
    const products = await Products.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addProduct = async (req, res) => {
  try {
    const data = req.body;
    const product = new Products(data);
    await product.save();
    res.send({
      message: "Product is added",
      product: product,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = await Products.findById(id);
    res.send(product );
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.productId;
    const updatedProduct = await Products.findByIdAndUpdate(id, req.body);
    updateProduct
      ? res.status(201).send({
          message: "product is updated",
          newProduct: updateProduct
        })
      : res.status(404).send("product not found");
  } catch (error) {
    res.status(500).send("Update product error  : " + error);
  }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.productId;
        const deleteProduct = await Products.findByIdAndDelete(id);
        deleteProduct
          ? res.send({
              message: "product is deleted"
            })
          : res.status(404).send("product not found");
      } catch (error) {
        res.status(500).send("Delete product error  : " + error);
      }
  };



export { getProduct, addProduct, getProductById,updateProduct,deleteProduct };
