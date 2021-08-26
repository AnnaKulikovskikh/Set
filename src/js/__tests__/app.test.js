import Team from '../app';
import Character from '../character';

const first = new Character('first');
const second = new Character('second');
const third = new Character('third');
const forth = new Character('forth');
const fifth = new Character('fifth');
const allHero = [first, second, third, forth, fifth];

const team = new Team();

test('repeating add', () => {
  team.add(first);
  team.add(second);
  team.add(first);
  team.add(first);
  const expected = ['first', 'second'];
  expect(team.toArray()).toEqual(expected);
});

test('addAll', () => {
  team.add(first);
  team.add(second);
  team.addAll(allHero);
  const expected = ['first', 'second', 'third', 'forth', 'fifth'];
  expect(team.toArray()).toEqual(expected);
});
