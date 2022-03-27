import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/restaurants")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRestaurants(res);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {restaurants.map((restaurant) => {
          //clé (unique) correspond à _id de la base de donnée//
          return <Card key={restaurant._id} restaurant={restaurant} />;
        })}
      </div>
    </>
  );
}
