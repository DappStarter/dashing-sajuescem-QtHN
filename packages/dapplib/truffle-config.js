require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note snow coil install clog sugar skate'; 
let testAccounts = [
"0x613fc0f99617275ccf4e90004ad8fe6a2fdc745e0e93567f6545e4ce7d9e3778",
"0x64309f3bf887e777dccfd53e8c9dcd72a74e3b9a00fac78a120040a531a7d315",
"0xec5baaf9de67c6ae2d3804e8dd4fa8ad93fbdedfda8f0ce8d6ea8696ce6791e3",
"0xc620ed13589f0f981b5a12198055ca9b1b05f5845fdf6a8c477e16a61a705471",
"0x93ac2f27ef43faf33ef9106f7f2e936148f763ef315c30837cf8d1e1cb883eb2",
"0x13e6247850ce0416fc01fcb8078318bcf0a7b406bbf5642d837841ace478c832",
"0x2688ccff550be47addc9bd85d670dc2cd9bd2dc4ac3096132a5f0d9edff05709",
"0x6181a359e900d69bfb1cab7ad34027964980e6eb1dde230fc6a8b33101ca143d",
"0xd0b57e7d950db3018fb13498cb4b6d853b68a81c90cf1d73fd78b90f081a6e65",
"0x50781e222393e71f33f4c12bb88e60ade9ed77e820cc3e4d5915cf1fd72f7541"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

