import DateTimeFormat = Intl.DateTimeFormat;
export type Action = {
  type: string,
  payload?: IStudentAction,
}

export interface INotifierStore {
  score: number;
  studentActions: IStudentAction[];
}

export interface IStudentAction {
  message: string;
  fee: number;
  datetime: DateTimeFormat;
}

export interface AssociativeArray {
  [index: string]: (state: INotifierStore, action: Action) => INotifierStore
}