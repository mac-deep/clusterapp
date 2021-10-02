import useSWR from "swr";
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

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const useARocket = (rocketId) => {
  const { data, error } = useSWR(`${API}/rockets/${rocketId}`, fetcher);
  return {
    rocket: data,
    isLoading: !error && !data,
    isError: error,
  };
};
