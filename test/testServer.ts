import * as express from "express";
import {Response, Request} from "express";
import * as bodyParser from "body-parser";

export default class TestServer {

  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';
  }


  start() {

    this.app.use(bodyParser.json());

    this.app.listen(this.port, () => {
      console.log("Server listened on: " + this.port)
    });

    this.app.post('/notificate', (req: Request, res: Response): void=> {
      console.log(req.body);
      res.status(200).send(JSON.stringify({
        message: "Everything is OK"
      }));
    });
  }
}