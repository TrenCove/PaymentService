/**
 * This is a dummy function as we arent actually trying to save any user payment info
 * 
 * @returns a TRUE boolean showing that it went through
 * 
 */
import { IPayment } from "../types/interfaces";
import PaymentFactory from "./payment-factory";
import Payment from "./Payment";
import Visa from "./visa";
import MasterCard from "./masterCard";
import Amex from "./amex";

export async function submitPayment(pay: string

): Promise<Visa|MasterCard|Amex>{

    return new Promise((resolve,reject) => {
        
        
        const p = PaymentFactory.getPayment(pay)

        return resolve(p);
    });

}

