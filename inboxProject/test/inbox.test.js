const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../complile');

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({
    data: bytecode, 
    arguments: ['Hi there!'] 
  });
});

describe('Inbox', () => {
  it('deploy', () => {
    assert.ok(inbox.options.address);
  });
  
  it('default', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });
  
  it('change the message', async () => {
    await inbox.methods.setMessage('bye').send({from:accounts[0]);
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
});
