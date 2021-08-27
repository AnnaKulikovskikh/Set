// TODO: write your code here
export default class Team {
  constructor() {
    this.member = new Set();
  }

  add(hero) {
    if (this.member.has(hero.name)) {
      throw new Error('already was added');
    }
    this.member.add(hero.name);
  }

  addAll(heroes) {
    heroes.forEach((hero) => this.member.add(hero.name));
  }

  toArray() {
    return Array.from(this.member);
  }
}
