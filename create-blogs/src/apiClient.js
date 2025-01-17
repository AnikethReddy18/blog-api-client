import axios from "axios";

const apiBaseUrl = import.meta.env.API_URL || "http://localhost:3000";

const apiClient = axios.create({
    baseURL: apiBaseUrl,
});

export default apiClient;