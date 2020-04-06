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
  filter_by = 'Computers';
  const url = `${baseUrl}/products?category=${filter_by}`;
  console.log(axios.get(url));
  return axios.get(url);
}