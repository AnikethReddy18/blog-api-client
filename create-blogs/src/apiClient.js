import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
console.log(import.meta.env.VITE_API_URL)
console.log("API Client Base URL:", apiClient.defaults.baseURL);
const apiClient = axios.create({
    baseURL: apiBaseUrl,
});
console.log(import.meta.env.VITE_API_URL || "http://localhost:3000")

export default apiClient;