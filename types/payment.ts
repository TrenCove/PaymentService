import { IPayment } from "../types/interfaces";

export default abstract class Payment implements IPayment {
  paymentType = "";

  getPaymentType(): string {
    return this.paymentType;
  }

  abstract submitPayment(): Boolean;
}
