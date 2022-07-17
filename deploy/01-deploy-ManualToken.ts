import { ethers, network } from "hardhat";
import { DeployFunction, DeployResult } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { developmentChains } from "../helper-hardhat-config";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;

  const { deployer } = await getNamedAccounts();
  console.log(deployer);
  const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
    const arg = [ethers.utils.parseEther("100"), "Silver Babyy", "SB"];
    const ManualToken: DeployResult = await deploy("TokenERC20", {
      from: deployer,
      args: arg,
      log: true,
      waitConfirmations: network.name === "hardhat" ? 1 : 6,
    });
  } else {
    const arg = [ethers.utils.parseEther("100"), "Silver Babyy", "SB"];
    const ManualToken: DeployResult = await deploy("TokenERC20", {
      from: deployer,
      args: arg,
      log: true,
      waitConfirmations: network.name === "hardhat" ? 1 : 6,
    });
  }

  log("------------------------------");
};
export default func;
func.tags = ["all", "manualToken"];
