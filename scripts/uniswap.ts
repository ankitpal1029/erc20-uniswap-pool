const { ethers } = require("ethers");
const {
  abi: UniswapV3Factory,
} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json");
require("dotenv").config();
// const GOERLI_URI = process.env.GOERLI_URI;
const GOERLI_URI =
  "https://eth-goerli.g.alchemy.com/v2/SPd7VteBVbgcrj2NqjUd-xVJtdfcQUn6";

// DAI on goerli
const address0 = "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60";
// SB on goerli
const address1 = "0xD83f39EC5c915A01735C6Ab6CFf190723D1a0633";
// Uniswap V3 positions NFT-v1
const factoryAddress = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
console.log(GOERLI_URI);

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(GOERLI_URI as string);

  const factoryContract = new ethers.Contract(
    factoryAddress,
    UniswapV3Factory,
    provider
  );

  const poolAddress = await factoryContract.getPool(address0, address1, 500);
  console.log("poolAddress", poolAddress);
}

main();
