import React from "react";

const Ingredients = ({ data }) => {
  console.log(data);
  return (
    <ol>
      <h2>{data.name}</h2>
      <li>{data.oil}</li>
      <li>{data.priprava}</li>
      <li>{data.prepare}</li>
      <img width={400} src={data.img} alt="" />
    </ol>
  );
};

export default Ingredients;
