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

export function getProductByBarcode(barcode: string) {
  const url = `${baseUrl}/products?barcode=${barcode}`;
  return axios.get(url);
}

export function submitPayment(body: {}) {
  const url = `${baseUrl}/sales`;
  return axios.post(url, body);
}