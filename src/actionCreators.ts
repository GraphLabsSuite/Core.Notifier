import {Action, IStudentAction} from "./types";
import {ADD_ACTION} from "./actions";
import {Notifier} from "./Notifier";

export const addAction = async (payload: IStudentAction): Promise<Action> => {
  return Notifier.send(payload)
    .then(() => {
      return {
        type: ADD_ACTION,
        payload,
      } as Action;
    });
};

export const addPlainAction = (payload: IStudentAction) => {
  return {
    type: ADD_ACTION,
    payload,
  };
};