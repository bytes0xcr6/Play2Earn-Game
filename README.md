# Play2Earn Runner Game (Blockchain)
Play to earn blockchain runner game that rewards tokens and NFTs

## Technology Stack & Dependencies

- Solidity (Writing Smart Contract)
- HTML, Css, Javascript For the website
- [Infura](https://infura.io/) Account on Infura as a node provider
- [NodeJS](https://nodejs.org/en/) To install Dependencies
- [Hardhat](https://hardhat.org/) Ethereum development environment
- [Ethers.js](https://docs.ethers.io/v5/) To interact with the blockchain

- Testnet used: Mumbai
- ✅ RunToken contract deployed to: 0x237aBEE2967805730F2926986C2c0c0878Db8dD5
- ✅ RunnerCollection contract deployed to: 0x65c67ba5307e1AbFAfdFD38905CAE3E5ef6F6c84

### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd contracts
```
```
$ npm install
```

### 3. Deploy Run token & NFT Collection to Polygon Mumbai testnet
- Setup your env file with both private key and mumbai RPC 
```
$ $ npx hardhat run scripts/deploy.js --network Mumbai
```

### 4. Provide the smart contract addresses in blockchain.js file

Images in the game are taken from https://www.flaticon.com/
