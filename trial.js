const axios = require("axios");
// console.log(" axios", axios);

const trial = async () => {
  await axios.get("https://fake-server-app-crud.herokuapp.com/users");
  console.log("axios");
};

function main() {
  trial();
  console.log(" main");
}

main();
