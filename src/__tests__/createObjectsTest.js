import Bowerman from "../characters/bowerman";
import Magician from "../characters/magician";
import Daemon from "../characters/daemon";
import Swordsman from "../characters/swordsman";
import Undead from "../characters/undead";
import Zombie from "../characters/zombie";

test.each([
    [new Bowerman ("someBow", "Bowman"), {name: 'someBow', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25}],
    [new Magician ("someMag", "Magician"), {name: 'someMag', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}],
    [new Daemon ("someDaemon", "Daemon"), {name: 'someDaemon', type: 'Daemon', health: 100, level: 1, attack:10 , defence: 40}],
    [new Swordsman ("someSword", "Swordsman"), {name: 'someSword', type: 'Swordsman', health: 100, level: 1, attack:40 , defence: 10}],
    [new Undead ("someUndead", "Undead"), {name: 'someUndead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25}],
    [new Zombie ("someZombie", "Zombie"), {name: 'someZombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10}],
])("Testing objects creating by classes calling", (nameOfClass, expected) => {
    const recieved = nameOfClass;
    expect(recieved).toEqual(expected);
});
