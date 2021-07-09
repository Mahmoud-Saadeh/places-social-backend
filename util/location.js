const axios = require('axios');

// const API_KEY = process.env.GOOGLE_API_KEY;
// const axios = require("axios");
// const HttpError = require("../models/http-error");
// const getCoordsForAddress = (address) => {
//   return {
//     lat: 40.7484474,
//     lng: -73.9871516,
//   };
// };

const getCoordsForAddress = async (address) => {
  const response = await axios.get(
    `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_KEY}&q=${address}&format=json`
  );
  const data = response.data;
  console.log(data);
  if (!data || data.error === 'Unable to geocode') {
    // from Google doc when there is no result
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }
  const coordinates = {
    lat: data[0].lat,
    lng: data[0].lon,
  };
  return coordinates;
};

module.exports = getCoordsForAddress;
