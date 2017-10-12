import {IPrepared} from './IPrepared';

export interface IPreparedError extends IPrepared {
  err: string;
  fee: number;
}