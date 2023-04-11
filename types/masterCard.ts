import Payment from "./payment";

export default class MasterCard extends Payment {
    constructor() {
        super()
        this.paymentType = "MasterCard"
    }

    submitPayment(): Boolean {
        return true;
    }
}