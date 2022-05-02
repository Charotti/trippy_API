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
export default function RestaurantsCard({ restaurant }) {
  console.log(restaurant);
  return (
    //rajouter les 2 accolades et "" pour la valeur//
    //Card restau
    <div className="container">
      <div className="">
        <div className="card bg-$gray-400" style={{ width: "18rem" }}>
          <div className="carte-header">
            <div className="d-flex justify-content-center">
              <img src="https://tse4.mm.bing.net/th?id=OIP.HJR1Hok5vZxpOP0XPn8F5gHaHa&pid=Api&P=0&w=178&h=178" />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{restaurant.name}</h5>
            <h6 className="card-subtitle mb-2 text-white">
              {restaurant.city}, {restaurant.country}
            </h6>
            <p className="card-text">adresse : {restaurant.address}</p>
            <p className="card-text">stars: {restaurant.stars}</p>
            <p className="card-text">cuisine : {restaurant.cuisine}</p>
            <p className="card-text">
              Catégorie de prix: {restaurant.priceCategory}
            </p>
            <a
              className="btn btn-primary"
              href={`/restaurants/${restaurant._id}`}
              role="button"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
