import {IPrepared, IStudentAction} from "./types";
export default class Preparer {

  prepareMessage(message: IStudentAction): IPrepared {
    return {
      ...message
    } as IPrepared;
  }

  prepareError(message: IStudentAction, fee: number): IPrepared {
    return {
      ...message,
      fee
    } as IPrepared;
  }

}