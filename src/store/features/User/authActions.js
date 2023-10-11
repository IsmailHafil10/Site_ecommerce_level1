import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { myAuth } from "./authSlice";
import { getToken } from "../../../util/storage";
const API_URL = "https://dummyjson.com/auth/login";
export const authLogin = createAsyncThunk(
  "auth/authLogin",
  async (credential) => {
    const { data } = await axios.post(API_URL, credential);

    return data;
  }
);

export const AuthLoader = () => {
  const token = getToken();

  return !token ? redirect("/login") : null;
};
