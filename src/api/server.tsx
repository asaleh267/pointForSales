const baseUrl = "http://localhost:3001";

const axios = require("axios").default;

export function getCategories() {
  const url = `${baseUrl}/category`;
  return axios.get(url);
}

export function getClients() {
  const url = `${baseUrl}/clients`;
  return axios.get(url);
}

export function getProducts() {
  const url = `${baseUrl}/products`;
  return axios.get(url);
}

export function getProductsFilteredByCategory(filter_by: string) {
  const url = `${baseUrl}/products?category=${filter_by}`;
  return axios.get(url);
}