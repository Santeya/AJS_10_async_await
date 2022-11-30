import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const stringifiedData = await json(data);
      return new GameSaving(JSON.parse(stringifiedData));
    }
    catch (e) {
      console.log(e);
    }
  }
}
