import React, { useEffect } from "react";
import { getAllGalaxies, getAllGalaxiesOf } from "../adapters/galaxies";

const playground = () => {
  useEffect(() => {
    getAllGalaxiesOf("web-dev").then((data) => console.log(data));
  });
  return <div>hello</div>;
};

export default playground;
