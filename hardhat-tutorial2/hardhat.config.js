require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.11",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/K48-xGSXU7JoKG2Z2-TLmg3_c5W_3wU0",
      accounts: ["5f1e6a9729a78254a537e9d62d26519809fa37a4cdc99f0b083a662ac1cb31e3"],
    },
  },
};