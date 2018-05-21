var assert = require("assert")
let Stubs = require("../contractStubs.js");
let Contract = require("../pollContract.js");

var Blockchain = Stubs.Blockchain;
var LocalContractStorage = Stubs.LocalContractStorage;

let contract = new Contract();
contract.init();
console.clear();

describe('SmartContract', () => {
    describe('getUnusedAlias()', () => {
        let gift = {
            to: "n1Gz69PMFuVxczhdX6PRK8M5iMBuU4yyhaj",
            message: "hello"
        };

        contract.create(JSON.stringify(gift));
        let gifts = contract.getUserGifts()

        it('alias generated', () => {
            assert(contract.totalGifts() > 0);
            assert(gifts.length > 0);
        });
    });

});