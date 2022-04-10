import React from "react";

//   {
//     id: 1,
//     name: "Imperial Hotel",
//     address: "84 av des Champs-Élysées",
//     city: "Paris",
//     country: "France",
//     stars: 5,
//     hasSpa: true,
//     hasPool: true,
//     priceCategory: 3,
//   }

export default function HotelsCard({ hotel }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{hotel.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {hotel.city}, {hotel.country}
        </h6>
        <p className="card-text">adresse : {hotel.address}</p>
        <p className="card-text">stars: {hotel.stars}</p>
        <p className="card-text">HasSpa : {hotel.hasSpa}</p>
        <p className="card-text">HasPool : {hotel.hasPool}</p>
        <p className="card-text">Catégorie de prix: {hotel.priceCategory}</p>
        {/* <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a> */}
      </div>
    </div>
  );
}
