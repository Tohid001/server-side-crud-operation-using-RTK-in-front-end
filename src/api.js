import axios from "axios";

export const api = {
  url: "http://localhost:3200",
  get: async function (dispatch) {
    const response = await axios.get(`${this.url}/users`);
    console.log("get", response.data);
    dispatch({ type: "getUsers", value: response.data });
  },
  patch: async function ({ dispatch, id, body, setIsUpdate }) {
    const response = await axios.patch(`${this.url}/users/${id}`, { ...body });
    console.log("patch", response.data);
  },
};
