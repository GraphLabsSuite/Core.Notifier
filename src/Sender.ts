import "isomorphic-fetch";
import {IPrepared} from "./IPrepared";
import {IResult} from "./IResult";

export default class Sender {

  private host: string = 'http://127.0.0.1:8080';

  async send(messageObject: IPrepared): Promise<IResult> {
    return fetch(`${this.host}/notificate`, {
      method: 'POST',
      headers:  {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(messageObject),
    }).then((response: Response) => {
      return {
        status: response.ok,
        message: response.body
      } as IResult;
    });
  }
}