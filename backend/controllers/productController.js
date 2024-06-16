const express = require("express");
const asyncHandler = require("express-async-handler");

//#region Get All Products
// @desc Get All Products
// @route GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "Get All Products" });
});

//#endregion

//#region Add New Product
// @desc Create New Product
// @route POST /api/products
// @access public
const createProduct = asyncHandler(async (req, res, next) => {
  console.log("Body: ", req.body);
  const { name, email, contact } = req.body;
  if (!name || !email || !contact) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create New Product" });
});

//#endregion

//#region Get One Product by ID
// @desc Get One Product
// @route GET /api/products/:id
// @access public
const getProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  if (!productId) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json({ message: `Get One Product for ${productId}` });
});

//#endregion

//#region Update Product by ID
// @desc Update Product
// @route PUT /api/products/:id
// @access public
const updateProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  if (!productId) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json({ message: `Update Product for ${productId}` });
});

//#endregion

//#region Remove Product by ID
// @desc Remove Product
// @route DELETE /api/products/:id
// @access public
const deleteProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  if (!productId) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json({ message: `Deleted Product for ${productId}` });
});

//#endregion

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};





//#region Mock Data
const product = [
  {
    "id": "1",
    "name": "Wireless Earbuds",
    "description": {
      "brand": "SoundMax",
      "model": "SM-E100",
      "about": "High-quality wireless earbuds with noise cancellation.",
      "features": "Bluetooth 5.0, Noise Cancellation, 24-hour battery life"
    },
    "rating": "4.5",
    "price": "99.99",
    "isOnDiscount": "true",
    "discountPercentage": "10",
    "discountedPrice": "89.99",
    "images": ["earbuds1.jpg", "earbuds2.jpg"],
    "category": "Electronics",
    "tags": ["wireless", "earbuds", "audio"],
    "inStock": "true",
    "createdAt": "2023-01-01T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Alice",
        "comment": "Great sound quality and comfortable to wear.",
        "rating": "5"
      },
      {
        "user": "Bob",
        "comment": "Good value for money.",
        "rating": "4"
      }
    ],
    "numOfReviews": "2"
  },
  {
    "id": "2",
    "name": "Blender Pro 500",
    "description": {
      "brand": "KitchenMaster",
      "model": "KM-B500",
      "about": "A powerful blender for smoothies and more.",
      "features": "1000W motor, 5 speed settings, BPA-free"
    },
    "rating": "4.0",
    "price": "59.99",
    "isOnDiscount": "false",
    "discountPercentage": "0",
    "discountedPrice": "59.99",
    "images": ["blender1.jpg", "blender2.jpg"],
    "category": "Home Appliances",
    "tags": ["kitchen", "blender", "appliance"],
    "inStock": "true",
    "createdAt": "2023-02-15T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Charlie",
        "comment": "Very powerful and easy to clean.",
        "rating": "4"
      },
      {
        "user": "Dana",
        "comment": "Makes perfect smoothies.",
        "rating": "4"
      }
    ],
    "numOfReviews": "2"
  },
  {
    "id": "3",
    "name": "Yoga Mat Deluxe",
    "description": {
      "brand": "FitLife",
      "model": "FL-YM200",
      "about": "Premium yoga mat with extra cushioning.",
      "features": "Non-slip surface, Eco-friendly material, Extra thick"
    },
    "rating": "4.8",
    "price": "39.99",
    "isOnDiscount": "true",
    "discountPercentage": "15",
    "discountedPrice": "33.99",
    "images": ["yogamat1.jpg", "yogamat2.jpg"],
    "category": "Fitness",
    "tags": ["yoga", "fitness", "mat"],
    "inStock": "true",
    "createdAt": "2023-03-01T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Eve",
        "comment": "Best yoga mat I've ever used.",
        "rating": "5"
      },
      {
        "user": "Frank",
        "comment": "Very comfortable and supportive.",
        "rating": "5"
      }
    ],
    "numOfReviews": "2"
  },
  {
    "id": "4",
    "name": "Smartwatch Series 5",
    "description": {
      "brand": "TechGear",
      "model": "TG-SW5",
      "about": "Advanced smartwatch with multiple health tracking features.",
      "features": "Heart rate monitor, GPS, Waterproof"
    },
    "rating": "3.5",
    "price": "199.99",
    "isOnDiscount": "false",
    "discountPercentage": "0",
    "discountedPrice": "199.99",
    "images": ["smartwatch1.jpg", "smartwatch2.jpg"],
    "category": "Wearables",
    "tags": ["smartwatch", "wearable", "tech"],
    "inStock": "false",
    "createdAt": "2023-04-01T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Grace",
        "comment": "Good features but battery life could be better.",
        "rating": "3"
      },
      {
        "user": "Hank",
        "comment": "Stylish and functional.",
        "rating": "4"
      }
    ],
    "numOfReviews": "2"
  },
  {
    "id": "5",
    "name": "Espresso Machine Elite",
    "description": {
      "brand": "CoffeeKing",
      "model": "CK-EM1000",
      "about": "Top-tier espresso machine for coffee enthusiasts.",
      "features": "15-bar pump, Stainless steel, Built-in grinder"
    },
    "rating": "4.7",
    "price": "299.99",
    "isOnDiscount": "true",
    "discountPercentage": "20",
    "discountedPrice": "239.99",
    "images": ["espresso1.jpg", "espresso2.jpg"],
    "category": "Kitchen Appliances",
    "tags": ["coffee", "espresso", "appliance"],
    "inStock": "true",
    "createdAt": "2023-05-01T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Ivan",
        "comment": "Makes the best espresso I've ever had at home.",
        "rating": "5"
      },
      {
        "user": "Judy",
        "comment": "Worth every penny.",
        "rating": "4"
      }
    ],
    "numOfReviews": "2"
  },
  {
    "id": "6",
    "name": "4K Ultra HD TV",
    "description": {
      "brand": "VisionTech",
      "model": "VT-4K55",
      "about": "Stunning 55-inch 4K Ultra HD TV with HDR.",
      "features": "4K resolution, HDR10, Smart TV"
    },
    "rating": "4.6",
    "price": "499.99",
    "isOnDiscount": "true",
    "discountPercentage": "10",
    "discountedPrice": "449.99",
    "images": ["tv1.jpg", "tv2.jpg"],
    "category": "Electronics",
    "tags": ["tv", "4k", "electronics"],
    "inStock": "true",
    "createdAt": "2023-01-10T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Kevin",
        "comment": "Excellent picture quality.",
        "rating": "5"
      },
      {
        "user": "Laura",
        "comment": "Great value for a 4K TV.",
        "rating": "4"
      }
    ],
    "numOfReviews": "2"
  },
  {
    "id": "7",
    "name": "Running Shoes",
    "description": {
      "brand": "FastTrack",
      "model": "FT-RS300",
      "about": "Lightweight and durable running shoes.",
      "features": "Breathable mesh, Cushioned sole, Durable"
    },
    "rating": "4.3",
    "price": "79.99",
    "isOnDiscount": "false",
    "discountPercentage": "0",
    "discountedPrice": "79.99",
    "images": ["shoes1.jpg", "shoes2.jpg"],
    "category": "Footwear",
    "tags": ["running", "shoes", "fitness"],
    "inStock": "true",
    "createdAt": "2023-02-01T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Mike",
        "comment": "Very comfortable and supportive.",
        "rating": "4"
      },
      {
        "user": "Nina",
        "comment": "Perfect for my daily runs.",
        "rating": "5"
      }
    ],
    "numOfReviews": "2"
  },
  {
    "id": "8",
    "name": "Digital SLR Camera",
    "description": {
      "brand": "PhotoPro",
      "model": "PP-DSLR800",
      "about": "High-performance DSLR camera with advanced features.",
      "features": "24MP sensor, 4K video, Wi-Fi connectivity"
    },
    "rating": "4.7",
    "price": "799.99",
    "isOnDiscount": "true",
    "discountPercentage": "15",
    "discountedPrice": "679.99",
    "images": ["camera1.jpg", "camera2.jpg"],
    "category": "Cameras",
    "tags": ["camera", "dslr", "photography"],
    "inStock": "true",
    "createdAt": "2023-03-10T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Oscar",
        "comment": "Amazing camera with great features.",
        "rating": "5"
      },
      {
        "user": "Pam",
        "comment": "Takes stunning photos.",
        "rating": "4"
      }
    ],
    "numOfReviews": "2"
  },
  {
    "id": "9",
    "name": "Gaming Laptop",
    "description": {
      "brand": "GamerX",
      "model": "GX-GL500",
      "about": "Powerful gaming laptop with high-end specs.",
      "features": "Intel i7, 16GB RAM, RTX 3060"
    },
    "rating": "4.5",
    "price": "1299.99",
    "isOnDiscount": "true",
    "discountPercentage": "10",
    "discountedPrice": "1169.99",
    "images": ["laptop1.jpg", "laptop2.jpg"],
    "category": "Computers",
    "tags": ["gaming", "laptop", "tech"],
    "inStock": "true",
    "createdAt": "2023-04-15T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Quincy",
        "comment": "Runs all games smoothly.",
        "rating": "5"
      },
      {
        "user": "Rachel",
        "comment": "Excellent performance and build quality.",
        "rating": "4"
      }
    ],
    "numOfReviews": "2"
  },
  {
    "id": "10",
    "name": "Electric Toothbrush",
    "description": {
      "brand": "CleanSmile",
      "model": "CS-ET100",
      "about": "Advanced electric toothbrush for a superior clean.",
      "features": "Sonic technology, 3 modes, Long battery life"
    },
    "rating": "4.2",
    "price": "49.99",
    "isOnDiscount": "false",
    "discountPercentage": "0",
    "discountedPrice": "49.99",
    "images": ["toothbrush1.jpg", "toothbrush2.jpg"],
    "category": "Personal Care",
    "tags": ["toothbrush", "personal care", "health"],
    "inStock": "true",
    "createdAt": "2023-05-10T12:00:00Z",
    "updatedAt": "2023-06-01T12:00:00Z",
    "reviews": [
      {
        "user": "Sam",
        "comment": "Cleans very well and easy to use.",
        "rating": "4"
      },
      {
        "user": "Tina",
        "comment": "My teeth have never felt cleaner.",
        "rating": "4"
      }
    ],
    "numOfReviews": "2"
  },
]
//#endregion