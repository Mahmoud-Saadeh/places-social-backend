// const API_KEY = process.env.GOOGLE_API_KEY;
// const axios = require("axios");
// const HttpError = require("../models/http-error");
const getCoordsForAddress = (address) => {
  return {
    lat: 40.7484474,
    lng: -73.9871516,
  };
};

// const getCoordsForAddress = async (address) => {
//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//       address
//     )}&key=${API_KEY}`
//   );
//   const data = response.data;
//   console.log(data);
//   if (!data || data.status === "ZERO_RESULTS") {
//     // from Google doc when there is no result
//     const error = new HttpError(
//       "Could not find location for the specified address.",
//       422
//     );
//     throw error;
//   }
//   const coordinates = data.results[0].geometry.location;
//   return coordinates;
// };

module.exports = getCoordsForAddress;
