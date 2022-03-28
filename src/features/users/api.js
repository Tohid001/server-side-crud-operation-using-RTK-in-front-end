import { usersAdapter } from "./usersSlice";

export const usersUrl = "https://fake-j-s-v-1.herokuapp.com/users";

export const pendingReducer = () => {
  return (state, action) => {
    console.log("pending");
    const { requestId } = action.meta;
    if (state.loading === "idle") {
      state.loading = "pending";
      state.currentRequestId = requestId;
    }
  };
};

export const fullfilledReducer = (type) => {
  return (state, action) => {
    console.log("fulfilled");
    const { requestId } = action.meta;
    if (state.loading === "pending" && state.currentRequestId === requestId) {
      state.loading = "idle";
      state.currentRequestId = undefined;
      type === "fetch"
        ? usersAdapter.setAll(state, action)
        : type === "patch"
        ? usersAdapter.updateOne(state, {
            id: action.payload.id,
            changes: action.payload.changes,
          })
        : usersAdapter.removeOne(state, action.payload);
    }
  };
};

export const rejectReducer = () => {
  return (state, action) => {
    console.log("rejected");

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
  };
};
