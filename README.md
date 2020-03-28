# Sample Burner Wallet 2

This repo provides a boilerplate for creating a customized wallet using the Burner Wallet 2 libraries.

## Setup

1. Clone the repo
2. Run `yarn install`
3. To connect to mainnet & most testnets, you'll need to provide an Infura key. Create a file
  named `.env` in the `basic-wallet` folder and set the contents to `REACT_APP_INFURA_KEY=<your key from infura.com>`
4. Run `yarn start` to start the wallet on `http://localhost:3000`, or run `yarn build` to compile a production wallet into the build directory.

**Note:** If you would like to extend Burner Wallet functionality by building your own plugin, check out the [`burner-wallet/sample-plugin`](https://github.com/burner-wallet/sample-plugin) repo.
