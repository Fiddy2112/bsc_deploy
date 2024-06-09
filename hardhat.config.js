require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    bscTest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
