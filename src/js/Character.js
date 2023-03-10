export default class Character {
  constructor(name, type) {
    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректно задано имя. Введите в поле от 2 до 10 символов');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error('Не выбран персонаж');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health < 1) {
      throw new Error('Персонаж мёртв. Повысить уровень невозможно');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    this.health = (this.health > 0) ? this.health : 0;
  }
}
