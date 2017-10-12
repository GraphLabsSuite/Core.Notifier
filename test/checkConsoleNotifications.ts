import "es6-promise";
import "isomorphic-fetch";
import Notifier from "../src/Notifier";
import TestServer from "./testServer";

describe('Notifier', () => {
  describe('#send();', () => {
    it('Successful sending to the server', () => {
      new TestServer().start();
      Notifier.send("message one").then(() => console.log('DO further')).catch((err) => console.log('Stop it'));
      Notifier.send("message two", 10).then(() => console.log('DO further')).catch((err) => console.log('Stop it'));
    });
  });
});