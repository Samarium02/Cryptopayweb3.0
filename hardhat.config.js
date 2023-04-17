require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/MtjQPCuLKZZYMBaJF75joOYt2IbndwGI',
      accounts: ['9659973f81363b2bc84e81d36070307c1a159a64a49eea5ee85e5d0e2cf2ac52'],
    },
  },
};