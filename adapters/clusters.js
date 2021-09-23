import { API } from "./api";

// fetching all clusters
export const getAllClusters = async () =>
  fetch(`${API}/clusters`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => err);

// fetching all a single cluster based on cluster slug
export const getACluster = async (clusterSlug) =>
  fetch(`${API}/clusters/${clusterSlug}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => err);

// fetching all clusters of a particluar galaxy
export const getAllClustersOf = async (galaxy) => {
  const clusters = fetch(`${API}/clusters`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => data.filter((cluster) => cluster.galaxy.slug === galaxy))
    .catch((err) => err);
  return clusters;
};
