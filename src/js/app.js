// TODO: write your code here
export default class Team {
  constructor() {
    this.member = new Set();
  }

  add(hero) {
    this.member.add(hero);
  }

  addAll(heroes) {
    heroes.forEach((hero) => this.member.add(hero));
  }

  toArray() {
    const result = [];
    this.member.forEach((hero) => result.push(hero.name));
    return result;
  }
}
