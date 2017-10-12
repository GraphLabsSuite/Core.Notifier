import * as express from "express";
import {Response, Request} from "express";
import * as bodyParser from "body-parser";

export default class TestServer {

  private app;
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

    this.app.post('/notificate', (result: Request, response: Response): void=> {
      console.log(result.body);
      response.status(200).send(JSON.stringify({
        message: "Everything is OK"
      }));
    });
  }
}