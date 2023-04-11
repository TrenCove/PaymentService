import { IPayment } from "../types/interfaces";
import Payment from "../functions/Payment";

export default class MasterCard extends Payment {
    constructor() {
        super()
        this.paymentType = "MasterCard"
    }
}