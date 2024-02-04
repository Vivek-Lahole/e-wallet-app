import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface userState {
  userData: any;
  loading: boolean;
  error: string | null;
}

const initialState: userState = {
  userData: null,
  loading: false,
  error: null,
};

export const user = createAsyncThunk("user", async () => {
  const response = await axios.get("");
});
