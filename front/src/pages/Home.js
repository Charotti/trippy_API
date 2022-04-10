import React, { useEffect, useState } from "react";
import RestaurantsCard from "../components/RestaurantsCard";
import HotelsCard from "../components/HotelsCard";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/restaurants")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRestaurants(res);
      });
    fetch("http://localhost:8001/hotels")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setHotels(res);
      });
  }, []);

  return (
    <>
      <div>
        {restaurants.slice(0, 2).map((restaurant) => {
          //clé (unique) correspond à _id de la base de donnée//
          return (
            <RestaurantsCard key={restaurant._id} restaurant={restaurant} />
          );
        })}
      </div>
      <div>
        {hotels.slice(0, 2).map((hotel) => {
          return <HotelsCard key={hotel._id} hotel={hotel} />;
        })}
      </div>
    </>
  );
}
