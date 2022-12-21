// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

// RESULT AFTER DEPLOYMENT:
// ✅ RunToken deployed to: 0x237aBEE2967805730F2926986C2c0c0878Db8dD5
// ✅ RunnerCollection deployed to: 0x65c67ba5307e1AbFAfdFD38905CAE3E5ef6F6c84
// ✅ RunnerCollection mined 10 tokens

const hre = require("hardhat");

async function main() {
  // Deployment for Run token contract
  const RunToken = await ethers.getContractFactory("RunToken");
  const runToken = await RunToken.deploy();
  await runToken.deployed();

  console.log(`✅ RunToken deployed to:`, runToken.address);

  // Deployment for Runner Collection contract
  const RunnerCollection = await ethers.getContractFactory("RunnerCollection");
  const runnerCollection = await RunnerCollection.deploy(
    "RunToken",
    "RUN",
    "https://ipfs.io/ipfs/QmTCsMc4vjxTSx4vfBz8ZDaugvF3XGcdWuxcN8HN8CobJ6/"
  );
  await runnerCollection.deployed();
  console.log("✅ RunnerCollection deployed to:", runnerCollection.address);

  await runnerCollection.mint(10);
  console.log("✅ RunnerCollection mined 10 tokens");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
