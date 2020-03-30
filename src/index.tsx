import React from 'react';
import ReactDOM from 'react-dom';
import BurnerCore from '@burner-wallet/core';
import { LocalSigner } from '@burner-wallet/core/signers';
import ModernUI from '@burner-wallet/modern-ui';
import { FuelGateway, FuelAsset, FuelPlugin } from 'fuel-burner-plugin';
import fakedai from './fakedai.png';

const fuelFakeDai = new FuelAsset({
  id: 'fakeDai', 
  name: 'FakeDai', 
  network: '5', 
  address: '0xCF852d1295fD158D43D58ceD47F88f4f4ab0931C', 
  icon: fakedai, 
});

const core = new BurnerCore({
  signers: [new LocalSigner()],
  gateways: [new FuelGateway()],
  assets: [fuelFakeDai],
});

const BurnerWallet = () =>
  <ModernUI
    title="Fuel Wallet"
    core={core}
    plugins={[
      new FuelPlugin({ faucet: 'fakeDai' })
    ]}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
