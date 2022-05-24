const axios = require("axios");

const base_url = "http://localhost:8080";

const sales_api = axios.create({
  baseURL: base_url,
});

export async function sales_api_get(endpoint, headers) {
  return await sales_api.get(endpoint, headers);
}

export async function sales_api_post(endpoint, body, headers) {
  return await sales_api.post(endpoint, body, headers);
}
