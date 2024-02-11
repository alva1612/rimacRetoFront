import axios from "axios";

const baseURL = "https://rimac-front-end-challenge.netlify.app/api";

export const quoteClient = axios.create({ baseURL });
