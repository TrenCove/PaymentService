import Amex from "../types/amex";
import MasterCard from "../types/masterCard";
import Visa from "../types/visa";

export default class PaymentFactory {
  static getPayment(type: string) {
    if (type == "Visa") {
      return new Visa();
    } else if (type == "Amex") {
      return new Amex();
    } else {
      return new MasterCard();
    }
  }
}
