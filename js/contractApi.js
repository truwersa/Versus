const CONTRACT_ADDRESS = "n1zMTYQucXWWZb9nsqUL5FZBSYmRrg4yije"; //406212e9418947dbde7b0faf23e7cd126ffc49148a344fd45a5a4e28011e92eb

class SmartContractApi {
    constructor(contractAdress) {
        let NebPay = require("nebpay");
        this.nebPay = new NebPay();
        this._contractAdress = contractAdress || CONTRACT_ADDRESS;
    }

    getContractAddress() {
        return this.contractAdress;
    }

    _simulateCall({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.simulateCall(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }

    _call({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.call(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }
}

class PollContract extends SmartContractApi {
    create(poll, cb) {
        this._call({
            callArgs: JSON.stringify([JSON.stringify(poll)]),
            callFunction: "create",
            callback: cb
        });
    }

    get(limit, offset, cb) {
        this._simulateCall({
            callArgs: `[${limit}, ${offset}]`,
            callFunction: "get",
            callback: cb
        });;
    }

    vote(pollId, option, cb) {
        this._call({
            callArgs: `[${pollId}, ${option}]`,
            callFunction: "vote",
            callback: cb
        });;
    }

}
