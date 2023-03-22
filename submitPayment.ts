import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/paid_auction.db", (error) => {
    if (error){
        console.error(error.message);
    }
    console.log("Connected submitePayment Service to items database");
});

export async function submitPayment(

): Promise<Boolean>{

    return new Promise((resolve,reject) => {
        return resolve(true);
    });

}