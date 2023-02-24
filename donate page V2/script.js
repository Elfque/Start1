// Import the Web3.js library
import Web3 from 'web3';

// Connect to the Ethereum network using the Web3.js library
const web3 = new Web3('https://ropsten.infura.io/v3/your-project-id');

// Get the contract ABI and address
const abi = [ [{"anonymous":null,"name":null,"inputs":[],"outputs":[],"type":"constructor","stateMutability":"nonpayable"},{"anonymous":null,"name":"OwnershipTransferred","inputs":[{"internalType":"address","name":"previousOwner","type":"address"},{"internalType":"address","name":"newOwner","type":"address"}],"outputs":[],"type":"event","stateMutability":null},{"anonymous":null,"name":"PriceForOneTokenChanged","inputs":[{"internalType":"address","name":"setter","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"outputs":[],"type":"event","stateMutability":null},{"anonymous":null,"name":"TokenAddressSet","inputs":[{"internalType":"address","name":"setter","type":"address"},{"internalType":"address","name":"token","type":"address"}],"outputs":[],"type":"event","stateMutability":null},{"anonymous":null,"name":"TokenBought","inputs":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"outputs":[],"type":"event","stateMutability":null},{"anonymous":null,"name":"Token","inputs":[],"outputs":[{"internalType":"address","name":"","type":"address"}],"type":"function","stateMutability":"view"},{"anonymous":null,"name":"buy","inputs":[],"outputs":[],"type":"function","stateMutability":"payable"},{"anonymous":null,"name":"claimProfits","inputs":[],"outputs":[],"type":"function","stateMutability":"nonpayable"},{"anonymous":null,"name":"claimTokensNotSold","inputs":[],"outputs":[],"type":"function","stateMutability":"nonpayable"},{"anonymous":null,"name":"connectToOtherContracts","inputs":[{"internalType":"address[]","name":"_contracts","type":"address[]"}],"outputs":[],"type":"function","stateMutability":"nonpayable"},{"anonymous":null,"name":"exchangeRate","inputs":[],"outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"type":"function","stateMutability":"view"},{"anonymous":null,"name":"owner","inputs":[],"outputs":[{"internalType":"address","name":"","type":"address"}],"type":"function","stateMutability":"view"},{"anonymous":null,"name":"priceForOneToken","inputs":[],"outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"type":"function","stateMutability":"view"},{"anonymous":null,"name":"renounceOwnership","inputs":[],"outputs":[],"type":"function","stateMutability":"nonpayable"},{"anonymous":null,"name":"transferOwnership","inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"outputs":[],"type":"function","stateMutability":"nonpayable"},{"anonymous":null,"name":"updatePriceForOneToken","inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"outputs":[],"type":"function","stateMutability":"nonpayable"}] ];
const address = '0x187Ba922b277f6541DbC410114C850685F87Ac39';

// Create a new instance of the contract using the Web3.js library
const contract = new web3.eth.Contract(abi, address);

// Call a function on the contract
contract.methods.totalContributions().call((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

// Listen for an event emitted by the contract
contract.events.Contribution((error, event) => {
  if (error) {
    console.error(error);
  } else {
    console.log(event.returnValues);
  }
});

// Send a transaction to the contract
const account = '0x187Ba922b277f6541DbC410114C850685F87Ac39';
const privateKey = '0x0123456789abcdef...';
const value = web3.utils.toWei('1', 'ether');
contract.methods.contribute().send({
  from: account,
  value: value,
  gas: 200000,
  gasPrice: 10000000000,
}).then((receipt) => {
  console.log(receipt);
}).catch((error) => {
  console.error(error);
});
