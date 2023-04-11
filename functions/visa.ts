import { IPayment } from "../types/interfaces";
import Payment from "../functions/Payment";

export default class Visa extends Payment {
    constructor() {
        super()
        this.paymentType = "Visa"
    }
}