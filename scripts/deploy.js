const hre = require("hardhat");

async function main() {

  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const market = await NFTMarket.deploy();

  await market.deployed();
  console.log("Marketplace address: ", market.address);


  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(market.address);

  await nft.deployed();
  console.log("nft contract address: ", nft.address);



}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
