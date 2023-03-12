import GameSavingLoader from '../js/GameSavingLoader';

test('Testing load function', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  };
  const result = await GameSavingLoader.load().then((saving) => saving);
  expect(result).toEqual(expected);
});
