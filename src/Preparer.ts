import {IPrepared} from "./IPrepared";
export default class Preparer {

  prepareMessage(message: string): IPrepared {
    return {
      message
    } as IPrepared;
  }

  prepareError(err: string, fee: number): IPrepared {
    return {
      err,
      fee
    } as IPrepared;
  }

}