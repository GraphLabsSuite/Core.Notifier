export interface InitNotifier {
  host: string;
  port: number;
  path: string;
  protocol: string;
}

let config: InitNotifier = {
  host: 'localhost',
  port: 8080,
  path: 'notificate',
  protocol: 'http',
};

export function init(params: InitNotifier) {
  config = params;
}

export function getConfig() {
  return config;
}