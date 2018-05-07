import Preparer from "./Preparer";
import Sender from "./Sender";
import {IResult, IStudentAction} from "./types";

export class Notifier {

  static async send(message: IStudentAction) {
    const preparer = new Preparer();
    const sender = new Sender();
    const preparedMessage = message.fee
      ? preparer.prepareError(message, message.fee)
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