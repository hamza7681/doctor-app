import axios from "axios";

export const http = axios.create({
  baseURL: "https://e-care-api-kountex.herokuapp.com/api",
});

export const login = axios.create({
  baseURL: "https://reqres.in/api",
});
