import axios from "axios";

const API_BASE_URL = "http://ec2-13-222-173-223.compute-1.amazonaws.com:30083/back1/api";

// Fetch products by category
export const getProducts = async (category = "") => {
  try {
    const url = category 
      ? `${API_BASE_URL}/products/${category}`
      : `${API_BASE_URL}/products`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Get product image URL
export const getProductImageUrl = (imagePath) => {
  return `${API_BASE_URL}/products/images/${imagePath}`;
};
