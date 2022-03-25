import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import axios from "axios";
import { GiBodyBalance } from "react-icons/gi";

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsersThunk",
  async (state, { getState, requestId, rejectWithValue }) => {
    try {
      console.log("fetchUsersThunk called");
      const { currentRequestId, loading } = getState().users;
      //only one request at a time
      //   if (loading !== "pending" || requestId !== currentRequestId) {
      //     return;
      //   }
      const response = await axios.get(`http://localhost:3200/users`);

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
      //only one request at a time
      //   if (loading !== "pending" || requestId !== currentRequestId) {
      //     return;
      //   }
      const response = await axios.patch(
        `http://localhost:3200/users/${id}`,
        body
      );

      // console.log("patchResponse", response);

      return { id, changes: body };
    } catch (error) {
      throw rejectWithValue({ errorMessage: error.message });
    }
  }
);

// export const deleteUserThunk = createAsyncThunk(
//   "users/deleteUserThunk",
//   async (id, { getState, requestId, rejectWithValue }) => {
//     try {
//       // console.log("deleteThunk");
//       const { currentRequestId, loading } = getState().counter;
//       //only one request at a time
//       if (loading !== "pending" || requestId !== currentRequestId) {
//         return;
//       }
//       await axios.delete(` http://localhost:4000/superheroes/${id}`);
//       // console.log("respone", response);

//       return id;
//     } catch (error) {
//       throw rejectWithValue({ errorMessage: error.message });
//     }
//   }
// );

// export const trialThunk2 = createAsyncThunk(
//   "counter/trialThunk",
//   async (state, { getState, requestId, rejectWithValue }) => {
//     try {
//       const { currentRequestId, loading } = getState().counter;
//       //only one request at a time
//       if (loading !== "pending" || requestId !== currentRequestId) {
//         return;
//       }
//       const response = await axios.get(" http://localhost:4000/superheroes");
//       // console.log("respone", response.data);

//       return response.data.data;
//     } catch (error) {
//       throw rejectWithValue({ network: error.message });
//     }
//   }
// );

const usersAdapter = createEntityAdapter({
  selectId: (entity) => entity.id,
});

// console.log(usersAdapter);

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({
    loading: "idle",
    currentRequestId: undefined,
    error: null,
  }),

  reducers: { initial: usersAdapter.setAll },

  extraReducers: {
    [fetchUsersThunk.pending](state, action) {
      console.log("pending");
      const { requestId } = action.meta;
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = requestId;
      }
    },
    [fetchUsersThunk.fulfilled](state, action) {
      console.log("fulfilled");
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.currentRequestId = undefined;
        usersAdapter.setAll(state, action);
      }
    },
    [fetchUsersThunk.rejected](state, action) {
      console.log("rejected");
      console.log("rejected", action);
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";

        state.currentRequestId = undefined;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error.message;
        }
      }
    },
    [patchUserThunk.pending](state, action) {
      console.log(" patchUserThunk pending");
      const { requestId } = action.meta;
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = requestId;
      }
    },
    [patchUserThunk.fulfilled](state, action) {
      const { id, changes } = action.payload;
      console.log("patchUserThunk fulfilled");
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.currentRequestId = undefined;
        usersAdapter.updateOne(state, {
          id,
          changes,
        });
      }
    },
    [patchUserThunk.rejected](state, action) {
      console.log(" patchUserThunk rejected", action);
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";

        state.currentRequestId = undefined;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error.message;
        }
      }
    },
    // [deleteThunk.pending](state, action) {
    //   console.log(" delete pending");
    //   const { requestId } = action.meta;
    //   if (state.loading === "idle") {
    //     state.loading = "pending";
    //     state.currentRequestId = requestId;
    //   }
    // },
    // [deleteThunk.fulfilled](state, action) {
    //   console.log("delete fulfilled");
    //   const { requestId } = action.meta;
    //   if (state.loading === "pending" && state.currentRequestId === requestId) {
    //     state.loading = "idle";
    //     state.currentRequestId = undefined;
    //     Adaptar.removeOne(state, action.payload);
    //   }
    // },
    // [deleteThunk.rejected](state, action) {
    //   console.log("delete rejected");
    //   // console.log("rejected", action);
    //   const { requestId } = action.meta;
    //   if (state.loading === "pending" && state.currentRequestId === requestId) {
    //     state.loading = "idle";

    //     state.currentRequestId = undefined;
    //     if (action.payload) {
    //       state.error = action.payload;
    //     } else {
    //       state.error = action.error.message;
    //     }
    //   }
    // },
  },
});

export const selectors = usersAdapter.getSelectors((state) => state.users);
// console.log("selectors", selectors);

export const { initial } = usersSlice.actions;

export default usersSlice.reducer;
