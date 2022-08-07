require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("@nomicfoundation/hardhat-toolbox");
require("solidity-coverage");
require("hardhat-deploy");

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.8",
  defaultNetwork: "hardhat",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts: [],
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    // gasReporter: {
    //   enabled: true,
    //   outputFile: "gas-report.txt",
    //   noColors: true,
    //   currency: "USD",
    //   coinmarketcap: COINMARKETCAP_API_KEY,
    // },
    // etherscan: {
    //   apiKey: ETHERSCAN_API_KEY,
    // },
    // namedAccounts: {
    //   deployer: {
    //     default: 0,
    //   },
    //   user: {
    //     default: 1,
    //   },
    // },
  },
};
