// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through 'node <script>'.
// When running the script with 'npx hardhat run <script>' you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat"); 
 
async function main() {  
 
    const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
    const hscp = await horoscopeNFT.deploy();   
    await hscp.deployed();
 
    //since we are testing, you should mention your own Eth wallet address
    const myAddress="0x62EDF6a152322d3D2ed8ce6Fa29F150873c1FD6e";
    console.log("horoscopeNFT deployed to:", hscp.address);   
 
    let txn = await hscp.mintNFT(myAddress, 'virgo');
    await txn.wait();
 
}
 
main()
    .then(() => process.exit(0))  
    .catch((error) => {    
    console.error(error);
    process.exit(1); 
 });