require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success story crawl super upon gown light army gas'; 
let testAccounts = [
"0xfe71e8d0097b1c1bde20d6cbcd060ec0daf13d37e2322cfedb80ca854b7c7a06",
"0x099f3ec052fb94c62387070dc2c5a06786e81108e3ae666f84ca1a0474f668e4",
"0x9a566570ded31fcf91a8b358f4e4a70f8f6d47dc373aa613fbac198f707eab35",
"0x95c6b5a8425aa26bea29c3bba088aae87d0e36a9247d8c28f6f06d7a28e0b082",
"0x2b89ae5e5833e15718cc219ebee76fd7e51fef0c3421723533242887a935d252",
"0x03667f30561f917b7addf09740cc1b1eaf73f873d8251f0253e23fa2dc75aff0",
"0xe56d3aa72b35457b1f14a9f3e516c439aadf21dc947391794b854813f2c94eb1",
"0x16280acf1378ced13f223bee003a136d17871baaf78b5123bc2aaf7b5327814b",
"0x76f19d7cd38771f3911bd5a97734260dd82d3366e256ed65a11c47a0d7bc46d2",
"0x841de82f85c80e0a435d38df0d8ecea5e15974f462cb0558d7e7603a0805ca70"
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

