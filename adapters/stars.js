import { API } from "./api";

export const getAllStars = async () =>
  fetch(`${API}/stars`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => err);

export const getAStar = async (starId) =>
  fetch(`${API}/stars/${starId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => err);

export const getAllStarsOf = async (cluster) => {
  const galaxies = fetch(`${API}/galaxies`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) =>
      data.filter((galaxy) => galaxy.supercluster.slug === supercluster)
    )
    .catch((err) => err);
  return galaxies;
};
