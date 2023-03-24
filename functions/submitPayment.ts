/**
 * This is a dummy function as we arent actually trying to save any user payment info
 * 
 * @returns a TRUE boolean showing that it went through
 * 
 */

export async function submitPayment(

): Promise<Boolean>{

    return new Promise((resolve,reject) => {
        return resolve(true);
    });

}