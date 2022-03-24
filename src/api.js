import axios from "axios";

export const api = {
  url: "http://localhost:3200",
  get: async function (dispatch) {
    const response = await axios.get(`${this.url}/users`);
    console.log("get", response.data);
    dispatch({ type: "getUsers", value: response.data });
  },
  patch: async function ({ dispatch, id, body, setActivity }) {
    const response = await axios.patch(`${this.url}/users/${id}`, { ...body });

    setActivity((prev) => {
      return {
        ...prev,
        isUpdate: !prev.isUpdate,
        isEdit: !prev.isEdit,
        showSuccess: !prev.showSuccess,
      };
    });

    setTimeout(() => {
      setActivity((prev) => {
        return {
          ...prev,
          showSuccess: !prev.showSuccess,
        };
      });
    }, 1000);
    // setActivity((prev) => {
    //   return {
    //     ...prev,
    //     showSuccess: !prev.showSuccess,
    //   };
    // });
  },
};
