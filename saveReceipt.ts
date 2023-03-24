import sqlite3 from "sqlite3";
import { Reciept } from "./types/interfaces";

const db = new sqlite3.Database("./db/paid_auction.db", (error) => {
    if (error){
        console.error(error.message);
    }
    console.log("Connected saveReceipt Service to items database");
});

export async function saveReciept(
    item_id: number,
    item_reciept: Reciept
): Promise<number>{

    return new Promise((resolve,reject) => {
        db.run(
            "INSERT INTO paid_auction (item_id, item_recepit) VALUES ($1,$2)",
            [item_id,JSON.stringify(item_reciept)],
            (error) => {
                if(error){
                    console.log(error);
                    return reject(400);
                }
                console.log("success");
                return resolve(200);
            }
        );
    });

}