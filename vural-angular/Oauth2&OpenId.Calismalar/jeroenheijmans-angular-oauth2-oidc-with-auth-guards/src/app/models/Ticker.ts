export interface Ticker {
  pair: string;
  high: number;
  last: number;
  timestamp: number;
  bid: number;
  volume: number;
  low: number;
  ask: number;
  open: number;
  average: number;
  daily: number;
  dailyPercent: number;
  denominatorsymbol: string;
  numeratorsymbol: string;
}
