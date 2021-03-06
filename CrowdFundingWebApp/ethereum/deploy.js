const HDWalletProvider = require('truffle-hdwaffle-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(
  'ready vanish safe drift knee heart arrow remove humble comic give little', 
  'https://rinkeby.infura.io/v3/ab31001bf2764fc880d447c45d2046b4'
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });
  console.log('Contract deployed to', result.options.address);
};
deploy();
