import { IPayment } from "../types/interfaces";
import Payment from "../functions/Payment";

export default class Amex extends Payment {
    constructor() {
        super()
        this.paymentType = "Amex"
    }
}