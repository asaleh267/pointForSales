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
