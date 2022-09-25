import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import User from "../Interfaces/User";
import axios from "axios";
import { toast } from "react-toastify";
import { userState } from "../Interfaces/UserState";
import { backendUrl } from "../Util/backendurl";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
  isAuthenticated: null,
  user: null,
} as userState;

const userSlice: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        setState(state, true, false, false, null, null);
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        payload.timeLine = payload.timeLine.map((timeline) => {
         
          return timeline;
        });
        setState(state, false, true, false, null, payload);
      })
      .addCase(getUser.rejected, (state, { payload }: any) => {
        setState(state, false, false, true, payload, null);
      })
      .addCase(isAuthenticatedUser.fulfilled, (state, { payload }) => {
        state.isAuthenticated = true;
      })
      .addCase(isAuthenticatedUser.rejected, (state, { payload }) => {
        state.isAuthenticated = false;
        console.log(payload);
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isAuthenticated = false;
        state.user=null;
      })
     
  },
});

export const getUser = createAsyncThunk(
  "user/GET_USER",
  async (type, thunkAPI) => {
    try {
      let res: any = await axios.get(backendUrl + "/me");

      return res.data.data[0] as User;
    } catch (err: any) {
      console.log(err["response"].data.message)
      toast.error(err["response"].data.message);
      return thunkAPI.rejectWithValue(err["response"].data.message);
    }
  }
);

export const logout = createAsyncThunk(
  "user/LOGOUT",
  async (type, thunkAPI) => {
    try {
      let res: any = await axios.get(backendUrl + "/logout");

      return res.data.success;
    } catch (err: any) {
      toast.error(err["response"].data.message);
      return thunkAPI.rejectWithValue(err["response"].data.message);
    }
  }
);

export const isAuthenticatedUser = createAsyncThunk(
  "user/isAuthenticated",
  async (type, thunkAPI) => {
    try {
      let res: any = await axios.get(backendUrl + "/isAuthenticated");

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err["response"].data.message);
    }
  }
);
export const { setAuth } = userSlice.actions;
export default userSlice.reducer;

function setState(
  state: userState,
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
  error: string | null,
  user: User | null
) {
  state.isLoading = isLoading;
  state.isSuccess = isSuccess;
  state.isError = isError;
  state.error = error;

  state.user = user;
}
