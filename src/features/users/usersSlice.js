import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import axios from "axios";
import {
  usersUrl,
  pendingReducer,
  fullfilledReducer,
  rejectReducer,
} from "./api";

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsersThunk",
  async (state, { getState, requestId, rejectWithValue }) => {
    try {
      console.log("fetchUsersThunk called");
      const { currentRequestId, loading } = getState().users;

      const response = await axios.get(usersUrl);

      return response.data;
    } catch (error) {
      throw rejectWithValue({ errorMessage: error.message });
    }
  }
);

export const patchUserThunk = createAsyncThunk(
  "users/patchUserThunk",
  async ({ id, body }, { getState, requestId, rejectWithValue }) => {
    try {
      console.log("patchUserThunk called");
      const { currentRequestId, loading } = getState().users;

      const response = await axios.patch(`${usersUrl}/${id}`, body);

      // console.log("patchResponse", response);

      return { id, changes: body };
    } catch (error) {
      throw rejectWithValue({ errorMessage: error.message });
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  "users/deleteUserThunk",
  async (id, { getState, requestId, rejectWithValue }) => {
    try {
      console.log("deleteThunk");
      const response = await axios.delete(`${usersUrl}/${id}`);
      console.log("deleteRespone", response);
      return id;
    } catch (error) {
      throw rejectWithValue({ errorMessage: error.message });
    }
  }
);

export const usersAdapter = createEntityAdapter({
  selectId: (entity) => entity.id,
});

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({
    loading: "idle",
    currentRequestId: undefined,
    error: null,
  }),

  reducers: { initial: usersAdapter.setAll },

  extraReducers: {
    [fetchUsersThunk.pending]: pendingReducer(),
    [fetchUsersThunk.fulfilled]: fullfilledReducer("fetch"),
    [fetchUsersThunk.rejected]: rejectReducer(),
    [patchUserThunk.pending]: pendingReducer(),
    [patchUserThunk.fulfilled]: fullfilledReducer("patch"),
    [patchUserThunk.rejected]: rejectReducer(),
    [deleteUserThunk.pending]: pendingReducer(),
    [deleteUserThunk.fulfilled]: fullfilledReducer(),
    [deleteUserThunk.rejected]: rejectReducer(),
  },
});

export const selectors = usersAdapter.getSelectors((state) => state.users);
// console.log("selectors", selectors);

export const { initial } = usersSlice.actions;

export default usersSlice.reducer;
