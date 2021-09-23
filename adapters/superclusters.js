import { API } from "./api";

export const getAllSuperClusters = async () =>
  fetch(`${API}/superclusters`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => err);

export const getSuperCluster = async () => {};
