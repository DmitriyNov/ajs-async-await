import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    const result = async () => {
      try {
        const response = await read();
        const data = await json(response);
        const obj = JSON.parse(data);
        const { id, created, userInfo } = obj;
        return new GameSaving(id, created, userInfo);
      } catch (error) {
        console.log(error);
      }
    };
    return result();
  }
}
