import React from "react";
//exemple fiche d'identité restau
// {
//     id: 1,
//     name: "Les trois Mousquetaires",
//     address: "22 av des Champs-Élysées",
//     city: "Paris",
//     country: "France",
//     stars: 4,
//     cuisine: "french",
//     priceCategory: 3,
//   },
export default function Card({ restaurant }) {
  return (
    //rajouter les 2 accolades et "" pour la valeur//
    //Card restau
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{restaurant.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {restaurant.city}, {restaurant.country}
        </h6>
        <p className="card-text">adresse : {restaurant.address}</p>
        <p className="card-text">stars: {restaurant.stars}</p>
        <p className="card-text">cuisine : {restaurant.cuisine}</p>
        <p className="card-text">
          Catégorie de prix: {restaurant.priceCategory}
        </p>
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
