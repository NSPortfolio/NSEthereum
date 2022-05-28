import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE0F99926840A3376bDC3Ad36f325892C5333E9Fe'
);

export default instance;
