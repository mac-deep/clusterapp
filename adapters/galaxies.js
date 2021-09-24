import { API } from "./api";

export const getAllGalaxies = async () =>
  fetch(`${API}/galaxies`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => err);

export const getAllGalaxiesOf = async (superclusterId) => {
  const galaxies = fetch(`${API}/galaxies`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) =>
      data.filter((galaxy) => galaxy.supercluster.slug === superclusterId)
    )
    .catch((err) => err);
  return galaxies;
};
