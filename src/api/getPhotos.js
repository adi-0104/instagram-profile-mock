import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPhotosPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/photos?_page=${pageParam}`, options);
  return response.data;
};
