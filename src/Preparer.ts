import {IPrepared, IStudentAction} from "./types";
export default class Preparer {

  prepareMessage(message: IStudentAction): IPrepared {
    return {
      Action: message.message,
      VariantId: message.variantId,
      Fee: message.fee,
      IsTaskFinished: message.isTaskFinished,
    } as IPrepared;
  }

  prepareError(message: IStudentAction, fee: number): IPrepared {
    return {
      Action: message.message,
      VariantId: message.variantId,
      Fee: fee,
      IsTaskFinished: message.isTaskFinished,
    } as IPrepared;
  }

}