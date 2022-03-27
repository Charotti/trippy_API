const express = require("express");
const router = express.Router();
const Joi = require("Joi");
const Hotel = require("../models/hotelsModel");
// const { Pool } = require("pg");
// const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });

// const hotels = [
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
//   },
//   {
//     id: 2,
//     name: "The Queen",
//     address: "3 Darwin Street",
//     city: "London",
//     country: "England",
//     stars: 4,
//     hasSpa: true,
//     hasPool: false,
//     priceCategory: 3,
//   },
//   {
//     id: 3,
//     name: "Kiwi land",
//     address: "4587 George St.",
//     city: "Auckland",
//     country: "New-Zealand",
//     stars: 3,
//     hasSpa: false,
//     hasPool: true,
//     priceCategory: 2,
//   },
// ];
// JOI VALIDATION SHEMA
const hotelSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().alphanum().required(),
  stars: Joi.number().integer(),
  hasSpa: Joi.boolean(),
  hasPool: Joi.boolean(),
  priceCategory: Joi.number().integer().min(1).max(3).required(),
});
// function validHotel(req, res, next) {
//   const validation = hotelSchema.validate(req.body);
//   if (validation.error) {
//     return res.status(400).json({
//       message: "Bad request (400)",
//       description: validation.error.details[0].message,
//     });
//   }
//   next();
// }
//POST HOTELS MONGODB//
router.post("/", async (req, res) => {
  let hotels;
  try {
    hotels = await Hotel.create(req.body);
  } catch (err) {
    console.log(err);
    return res.status(400).send("error 400");
  }
  res.status(201).json("hotel created");
});

// GET ALL HOTELS
// router.get("/", async (_req, res) => {
//   let hotels = await Postgres.query("SELECT * FROM hotels");
//   res.json(hotels.rows);
// });
router.get("/", async (req, res) => {
  let hotels;
  try {
    hotels = await Hotel.find();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "an error happened",
    });
  }
  res.json(hotels);
});
// GET HOTEL BY ID
// router.get("/id/:id", async (req, res) => {
//   const hotels = await Postgres.query("SELECT * FROM hotels WHERE id=$1", [
//     req.params.id,
//   ]);
//   res.json(hotels.rows);
// });

router.get("/id/:id", async (req, res) => {
  let hotels;
  try {
    hotels = await Hotel.findById(req.params.id);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "an error happened",
    });
  }
  res.json(hotels);
});
// POST AN HOTEL
// router.post("/", validHotel, (req, res) => {
//   const hotel = req.body;
//   hotel.id = hotels.length + 1;
//   hotels.push(hotel);
//   res.status(201).json({ message: "Hotel added", hotel });
// });

//PATCH
// router.patch("/:id", (req, res) => {
//   const hotel = hotels.find((hotel) => {
//     return hotel.id.toString() === req.params.id;
//   });
//   if (!hotel) {
//     return res.send(`Hotel with id: ${req.params.id} not found`);
//   }
//   hotel.name = req.body.name;
//   res.json({ message: "hotel was updated", hotels });
// });

//DELETE
// router.delete("/:id", (req, res) => {
//   const hotel = hotels.find((hotel) => {
//     return hotel.id.toString() === req.params.id;
//   });
//   if (!hotel) {
//     return res.send(`hotel with id : $ {req.params.id} not found`);
//   }
//   const index = hotels.indexOf(hotel);
//   hotels.splice(index, 1);
//   res.json({
//     message: ` the hotel with id $ {req.params.id} was removed`,
//     hotel,
//   });
// });
module.exports = router;
