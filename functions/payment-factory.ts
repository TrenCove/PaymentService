import Amex from "./Amex";
import MasterCard from "./MasterCard";
import Visa from "./Visa";
import { IPayment } from "../types/interfaces";

export default class PaymentFactory {
    static getPayment(type: string) {
        if (type == 'Visa') {
            return new Visa()
        }
        else if (type == 'Amex'){
            return new Amex()
        }
        else{
            return new MasterCard()
        }
    }
}