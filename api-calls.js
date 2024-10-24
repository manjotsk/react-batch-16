// fetch
import axios from "axios";

const main = () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((users) => {
    console.log(users.data);
  });
};

main();
