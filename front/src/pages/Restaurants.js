import React, { useEffect, useState } from "react";
import RestaurantsCard from "../components/RestaurantsCard";

export default function Restaurants() {
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
      <div className="container">
        <div className="d-flex align-items-center vh-100">
          {restaurants.map((restaurant) => {
            //clé (unique) correspond à _id de la base de donnée//
            return (
              <RestaurantsCard key={restaurant._id} restaurant={restaurant} />
            );
          })}
        </div>
      </div>
    </>
  );
}
