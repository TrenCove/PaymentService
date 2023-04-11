/**
 * This is a dummy function as we arent actually trying to save any user payment info
 * 
 * @returns a TRUE boolean showing that it went through
 * 
 */
import { IPayment } from "../types/interfaces";
import PaymentFactory from "./payment-factory";
import Payment from "./Payment";

export async function submitPayment(

): Promise<Boolean>{

    return new Promise((resolve,reject) => {
        const i = Math.floor(Math.random() * 3)
        if(i == 0){
            const p = PaymentFactory.getPayment("Visa")
        }
        else if (i == 1){
            const p = PaymentFactory.getPayment("Amex")
        }
        else{
            const p = PaymentFactory.getPayment("MasterCard")
        }
        return resolve(true);
    });

}

