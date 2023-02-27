import axios from "axios";

export const auth = axios.create({
  baseURL: "https://reqres.in/api",
});

export const http = axios.create({
  baseURL:'https://e-care-api-kountex.herokuapp.com/api'
})