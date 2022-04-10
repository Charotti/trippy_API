import React, { useEffect, useState } from "react";
import HotelsCard from "../components/HotelsCard";

export default function Hotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
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
        {hotels.map((hotel) => {
          return <HotelsCard key={hotel._id} hotel={hotel} />;
        })}
      </div>
    </>
  );
}
