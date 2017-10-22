import Preparer from "./Preparer";
import Sender from "./Sender";
import {IResult} from "./types";

export default class Notifier {

  static async send(message: string, fee?: number) {
    const preparer = new Preparer();
    const sender = new Sender();
    const preparedMessage = (fee != null)
      ? preparer.prepareError(message, fee)
      : preparer.prepareMessage(message);
    sender.send(preparedMessage).then((result: IResult) => {
      if (result.status === 200) {
        console.log(`Successful: ${result.message}`);
      } else {
        console.log(`Unsuccessful: ${result.message}`);
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}