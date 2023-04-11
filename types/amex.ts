import Payment from "./payment"

export default class Amex extends Payment {
    constructor() {
        super()
        this.paymentType = "Amex"
    }

    submitPayment(): Boolean {
        return true;
    }
}