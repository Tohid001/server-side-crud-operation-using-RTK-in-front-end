import axios from "axios";

export const api = {
  url: "http://localhost:3200",
  get: async function (dispatch) {
    const response = await axios.get(`${this.url}/users`);
    console.log("api", response.data);
    dispatch({ type: "getUsers", value: response.data });
  },
};
