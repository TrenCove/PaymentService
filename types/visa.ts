import Payment from "./payment";

export default class Visa extends Payment {
    constructor() {
        super()
        this.paymentType = "Visa"
    }

    submitPayment(): Boolean {
        return true;
    }
}