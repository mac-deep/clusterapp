import React from "react";
import PropTypes from "prop-types";
import ClusterLayout from "../../../../layouts/ClusterLayout";
import { getACluster } from "../../../../adapters/clusters";

const Cluster = ({ cluster }) => <div>Cluster of {cluster.title}</div>;

Cluster.PageLayout = ClusterLayout;

Cluster.propTypes = {
  cluster: PropTypes.string,
};

Cluster.defaultProps = {
  cluster: "cluster",
};

export const getServerSideProps = async ({ params }) => {
  const cluster = await getACluster(params.cluster)
    .then((data) => data)
    .catch((err) => err);
  return {
    props: {
      supercluster: params.supercluster,
      cluster,
    },
  };
};

// export const getStaticPaths = async () => {
//   const paths = await getAllClusters()
//     .then((data) =>
//       data.map((cluster) => ({
//         params: {
//           cluster: cluster.slug,
//           galaxy: cluster.galaxy.slug,
//           supercluster: cluster.supercluster.slug,
//         },
//       }))
//     )
//     .catch((err) => err);
//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Cluster;
