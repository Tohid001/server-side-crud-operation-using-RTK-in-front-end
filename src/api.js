import axios from "axios";

export const api = {
  url: "http://localhost:3200",
  get: async function (dispatch) {
    const response = await axios.get(`${this.url}/users`);
    console.log("get", response.data);
    dispatch({ type: "getUsers", value: response.data });
  },
  patch: async function ({
    currentUserIndex,
    dispatch,
    id,
    body,
    setActivity,
  }) {
    await axios.patch(`${this.url}/users/${id}`, { ...body });

    setActivity((prev) => {
      return {
        ...prev,
        isUpdate: !prev.isUpdate,
        isEdit: !prev.isEdit,
        showSuccess: !prev.showSuccess,
      };
    });
    dispatch({ type: "patchUser", value: body, currentUserIndex });
    setTimeout(() => {
      setActivity((prev) => {
        return {
          ...prev,
          showSuccess: !prev.showSuccess,
        };
      });
    }, 1000);
  },
};
