import Character from '../Character';
import Bowman from '../Bowman';

test('Некорректное имя', () => {
  expect(() => new Character('Nebuchadnezzar', 'Bowman')).toThrow();
});

test('Ошибка в type', () => {
  expect(() => new Character('Leo', '')).toThrow();
});

test('Создание объекта', () => {
  const warior = new Character('Leo', 'Bowman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Leo',
    type: 'Bowman',
  };

  expect(warior).toEqual(correct);
});

test('Повысить уровень', () => {
  const bowman = new Bowman('Bowman');
  bowman.levelUp();
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'Bowman', type: 'Bowman',
  };
  expect(bowman).toEqual(result);
});

test('Повысить уровень умершего', () => {
  expect(() => {
    const bowman = new Bowman('Bowman');
    bowman.health = 0;
    bowman.levelUp();
  }).toThrow(new Error('Персонаж мёртв. Повысить уровень невозможно'));
});

test('Повысить уровень раненого', () => {
  const bowman = new Bowman('Bowman');
  bowman.damage(10);
  const result = {
    attack: 25, defence: 25, health: 92.5, level: 1, name: 'Bowman', type: 'Bowman',
  };
  expect(bowman).toEqual(result);
});

test('Повысить уровень раненого с показателем жизни 0', () => {
  const bowman = new Bowman('Bowman');
  bowman.damage(150);
  const result = {
    attack: 25, defence: 25, health: 0, level: 1, name: 'Bowman', type: 'Bowman',
  };
  expect(bowman).toEqual(result);
});
