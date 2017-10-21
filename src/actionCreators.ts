import {IStudentAction} from "./types";
import {ADD_ACTION} from "./actions";
import Notifier from "./Notifier";

export const addAction = (payload: IStudentAction) => {
  Notifier.send(payload.message, payload.fee).then(() => {
    return {
      type: ADD_ACTION,
      payload,
    } as IStudentAction;
  });
};