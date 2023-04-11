import { IPayment } from "../types/interfaces";

export default class Payment implements IPayment {
    paymentType = "null"

    getPaymentType(): string {
        return this.paymentType
    }
}