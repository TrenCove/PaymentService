import sqlite3 from "sqlite3";
import { auctionPaid } from "./types/interfaces";

const db = new sqlite3.Database("./db/paid_auction.db", (error) => {
    if (error){
        console.error(error.message);
    }
    console.log("Connected searchItemID service to items database");
});

export async function searchPaid(
    item_id: string,

): Promise<auctionPaid> {

    return new Promise((resolve,reject) => {
        db.get(
        
            "SELECT * FROM paid_auction WHERE item_id="+item_id,
            
    
            (error: any, row: auctionPaid) => {
                if (error){
                    console.log(error);
                    return reject(400);
                }
                
                if(row){
                    console.log("reciept searched");
                    return resolve(row);
                }else{
                    console.log("reciept does not exist");
                    return resolve(row);
                }
            }
        );
    });
}