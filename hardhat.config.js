require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
      balance: 100000000000000
    }
  }
};
