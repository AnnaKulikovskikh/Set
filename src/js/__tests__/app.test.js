import Team from '../app';
import Character from '../character';

const first = new Character('first');
const second = new Character('second');
const third = new Character('third');
const forth = new Character('forth');
const fifth = new Character('fifth');
const allHero = [first, second, third, forth, fifth];

const team = new Team();

test('add', () => {
  team.add(first);
  team.add(second);
  const expected = ['first', 'second'];
  expect(team.toArray()).toEqual(expected);
});

test('repeating add', () => {
  expect(() => team.add(first)).toThrow('already was added');
});

test('addAll', () => {
  team.add(third);
  team.add(forth);
  team.addAll(allHero);
  const expected = ['first', 'second', 'third', 'forth', 'fifth'];
  expect(team.toArray()).toEqual(expected);
});
