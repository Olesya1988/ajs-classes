import Character from '../Character';

test('Некорректное имя', () => {
  expect(() => new Character('A', 'Bowman')).toThrow(new Error('Некорректно задано имя. Введите в поле от 2 до 10 символов'));
});

test('Ошибка в type', () => {
  expect(() => new Character('Alex', 'Bow')).toThrow(new Error('Не выбран персонаж'));
});

test('Правильно создаётся объект', () => {
  const warior = new Character('Alex', 'Bowman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'Bowman',
  };

  expect(warior).toEqual(correct);
});
