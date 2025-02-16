import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

const apiClient = axios.create({
    baseURL: apiBaseUrl,
});

export default apiClient;