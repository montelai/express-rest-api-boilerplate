const contracts = require('../config/deficonfig.json');
import { ethers } from 'ethers';
require('dotenv').configure();

let httpProvider = new ethers.providers.JsonRpcProvider({
  url: 'http://caffeineeeeeserver.dynu.net:',
});

console.log(httpProvider);
