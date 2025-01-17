import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
console.log(import.meta.env.VITE_API_URL || "http://localhost:3000")
console.log(import.meta.env.VITE_API_URL)
const apiClient = axios.create({
    baseURL: apiBaseUrl,
});
console.log("API Client Base URL:", apiClient.defaults.baseURL);

export default apiClient;