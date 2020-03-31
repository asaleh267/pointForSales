const baseUrl = "http://localhost:3004";

const axios = require("axios").default;

export function getCategories() {
  const url = `${baseUrl}/category`;
  return axios.get(url);
}
