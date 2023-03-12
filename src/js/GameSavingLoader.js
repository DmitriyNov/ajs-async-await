import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const result = async () => {
      try {
        const response = await read();
        const data = await json(response);
        return JSON.parse(data);
      } catch (error) {
        console.log(error);
      }
    };
    return result();
  }
}
