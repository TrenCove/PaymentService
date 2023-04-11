/**
 * This is a dummy function as we arent actually trying to save any user payment info
 *
 * @returns a boolean showing whether it went through
 *
 */
import PaymentFactory from "./payment-factory";

export async function submitPayment(pay: string): Promise<Boolean> {
  return new Promise((resolve, reject) => {
    const card = PaymentFactory.getPayment(pay);
    const paymentResult = card.submitPayment();
    if(paymentResult == true){
        return resolve(paymentResult);
    }else{
        return reject(paymentResult);
    }
  });
}
