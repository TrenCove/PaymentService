import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { auctionPaid } from "./types/interfaces";
import { submitPayment } from "./functions/submitPayment";
import { saveReciept } from "./functions/saveReceipt";
import { searchPaid } from "./functions/searchPaid";
import cors from "cors";

const app: Express = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = 3004;

app.post(
  "/submitPayment",
  async (
    req: Request<unknown, unknown, auctionPaid, unknown>,
    res: Response
  ) => {
    try {
      const paymentResponse = await submitPayment(req.body.pay);
      console.log(paymentResponse);
      
        const response = await saveReciept(
          req.body.item_id,
          req.body.item_receipt
        );
        res.sendStatus(response);
      
    } catch (error) {
      res.sendStatus(400);
    }
  }
);

app.get("/searchPaid/:item_id", async (req: Request, res: Response) => {
  try {
    const response = await searchPaid(req.params.item_id);
    res.json(response);
  } catch (error) {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`App listening on PORT ${port}`);
});
