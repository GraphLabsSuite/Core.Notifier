import {IPrepared, IStudentAction} from "./types";
export default class Preparer {

  prepareMessage(message: IStudentAction): IPrepared {
    return {
      Action: message.message,
      VariantId: message.taskId,
      StudentId: 1,
    } as IPrepared;
  }

  prepareError(message: IStudentAction, fee: number): IPrepared {
    return {
      ...message,
      fee
    } as IPrepared;
  }

}