const axios = require("axios");

const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price";

exports.getPrices = async (coins) => {
  const ids = coins.join(",");
  const { data } = await axios.get(COINGECKO_URL, {
    params: {
      ids,
      vs_currencies: "usd"
    }
  });
  return data;
};
