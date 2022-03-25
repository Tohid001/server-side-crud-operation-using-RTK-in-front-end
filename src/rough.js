import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const trialThunk = createAsyncThunk(
  "counter/trialThunk",
  async (obj, { getState, requestId, rejectWithValue }) => {
    try {
      const { currentRequestId, loading } = getState().counter;
      //only one request at a time
      if (loading !== "pending" || requestId !== currentRequestId) {
        return;
      }
      const response = await axios.get(" http://localhost:4000/superheroes");

      return response.data;
    } catch (err) {
      //custom error
      throw rejectWithValue({ network: err.message });
    }
  }
);

const initialState = {
  entities: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

//

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    dispatchOnUnmount(state) {
      return {
        ...state,
        entities: [],
        loading: "idle",
        currentRequestId: undefined,
        error: null,
      };
    },
  },

  extraReducers: {
    [trialThunk.pending](state, action) {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    },
    [trialThunk.fulfilled](state, action) {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.entities.push(action.payload);
        state.currentRequestId = undefined;
      }
    },
    [trialThunk.rejected](state, action) {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";

        state.currentRequestId = undefined;
        if (action.payload) {
          state.error = action.payload.errorMessage;
        } else {
          state.error = action.error.message;
        }
      }
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
