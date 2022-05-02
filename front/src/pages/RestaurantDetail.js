import res from "express/lib/response";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8001/restaurants/${id}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return <div>RestaurantDetail</div>;
}
