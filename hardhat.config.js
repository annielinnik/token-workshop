/** @type import('hardhat/config').HardhatUserConfig */
require("@typechain/hardhat");

module.exports = {
  solidity: "0.8.27",
  paths: {
    sources: "./contracts", // Default path for contracts
  },
  networks: {
    hardhat: {
      chainId: 11155111
    },
  },
  typechain: {
    outDir: "src/types/ethers",
    target: "ethers-v6",
  },
};
