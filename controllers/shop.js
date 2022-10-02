const Product = require("../model/product");
const Cart = require("../model/cart");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      pageTitle: "All Products",
      prods: products,
      path: "/products",
      // layout: false //special keyword for handlebar for not using default layout
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  const product = Product.findById(prodId, (product) => {
    res.render("shop/product-details", {
      pageTitle: "Product details",
      product: product,
      path: "/products",
      // layout: false //special keyword for handlebar for not using default layout
    });
  });
};

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/index", {
      pageTitle: "Shop",
      prods: products,
      path: "/",
      // layout: false //special keyword for handlebar for not using default layout
    });
  });
};

// Cart route
exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
  const productId = req.body.id;
  Product.findById(productId, (product) => {
    Cart.deleteProduct(productId, product.price);
    res.redirect("/cart");
  });
};

// Cart route
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Order page",
    path: "/orders",
  });
};

// Checkout route
exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout page",
    path: "/checkout",
  });
};
