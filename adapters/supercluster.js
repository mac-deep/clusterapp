const URL = "http://localhost:1337";
import axios from "axios";

export const AllSuperCluster = async () => {
  axios
    .get(`${URL}/superclusters`)
    .then((response) => response.data)
    .catch(err);
};
