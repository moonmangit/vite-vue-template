import axios from "axios";
import { defineAuthService } from "./auth";
import type { ServiceContext } from "../assets/libs/service-context";

// define base axios instance with config (.env, constants, etc.)
const base = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// global interceptors, e.g. for auth token
// TODO: add interceptors for request/response, e.g. for auth token, error handling, etc.

// wiring services
const serviceContext: ServiceContext = {
  base,
};
const authService = defineAuthService(serviceContext);

export default {
  base,
  auth: authService,
};
