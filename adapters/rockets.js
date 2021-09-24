import { API } from "./api";

export const getAllRockets = async () =>
  fetch(`${API}/rockets`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => err);

export const getARocket = async (rocketId) => {
  const galaxies = fetch(`${API}/rockets/${rocketId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
  return galaxies;
};
