import {IResult, IPrepared} from "./types";
import axios, {AxiosResponse} from "axios";

export default class Sender {

  private host: string = 'http://127.0.0.1:8080';

  async send(messageObject: IPrepared): Promise<IResult> {
    return axios.post(`${this.host}/notificate`, messageObject)
      .then((response: AxiosResponse<any>) => {
      return {
        status: response.status,
        message: response.data.message
      } as IResult;
    });
  }
}