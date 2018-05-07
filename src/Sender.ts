import {IResult, IPrepared} from "./types";
import axios, {AxiosResponse} from "axios";
import {getConfig} from "./config";

export default class Sender {
  async send(messageObject: IPrepared): Promise<IResult> {
    const config = getConfig();
    return axios.post(`${config.protocol}://${config.host}:${config.port}/${config.path}`, messageObject)
      .then((response: AxiosResponse<any>) => {
      return {
        status: response.status,
        message: response.data.message
      } as IResult;
    });
  }
}