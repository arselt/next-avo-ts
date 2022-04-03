import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <h1>Hello Next.js ❎</h1>
      {productList.map((product) => (
        <li>
          <a href={`/product/${product.id}`}>{product.name}</a>
        </li>
      ))}
    </div>
  );
};

export default HomePage;
