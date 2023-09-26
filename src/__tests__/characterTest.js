import Character from "../character";
import Bowerman from "../characters/Bowerman";

test ("Testing the class Character error of name", () => {
    expect( () => {
        const someCharacter = new Character("someVeryLongName", "Magician");
    } ).toThrow();
});

test ("Testing the class Character error of type in types", () => {
    expect( () => {
        const someCharacter = new Character("someName", "hobbit");
    } ).toThrow();
});

// test ("Testing levelUp method", () => {
//     const someCharacter = new Bowerman ("someName", "Bowman");
//     someCharacter.levelUp();
//     const expected = {
//         name: "someName",
//         type: "Bowman",
//         level: 2,
//         health: 100,
//         attack: 30,
//         defence:  30
//     };
//     expect(someCharacter).toEqual(expected);
// });

test ("Testing 'levelUp' method", () => {
    const someCharacter = new Bowerman ("someName", "Bowman");
    someCharacter.level = 3;
    someCharacter.attack = 52;
    someCharacter.defence = 61;
    someCharacter.health = 77;
    someCharacter.levelUp();
    const expected = {
        name: "someName",
        type: "Bowman",
        level: 4,
        health: 100,
        attack: 62,
        defence: 73
    };
    expect(someCharacter).toEqual(expected);
});

test ("Testing throwing Error in 'levelUp' method", () => {
    const someCharacter = new Bowerman("someName", "Bowman");
    someCharacter.health = 0;

    expect( () => {
        someCharacter.levelUp();
    } ).toThrow();
});

test ("Testing 'damage' method", () => {
    const someCharacter = new Bowerman("someName", "Bowman");
    someCharacter.level = 3;
    someCharacter.attack = 52;
    someCharacter.defence = 61;
    someCharacter.health = 77;
    someCharacter.damage(15);
    const expected = {
        name: "someName",
        type: "Bowman",
        level: 3,
        health: 71,
        attack: 52,
        defence: 61
    };
    expect(someCharacter).toEqual(expected);
});

test ("Testing throwing Error in 'damage' method", () => {
    const someCharacter = new Bowerman("someName", "Bowman");
    someCharacter.health = 10;
    
    expect( () => {
        someCharacter.damage(15);
    } ).toThrow();
});

// // --- Тест для "else path not taken" без строки "/* istanbul ignore else */" перед условием, не имеющим "else" ---
// test ("Testing throwing Error in 'damage' method", () => {
//     const someCharacter = new Bowerman("someName", "Bowman");
//     someCharacter.health = null;
//     someCharacter.damage(15);
//     expect(false).toEqual(false);
// });
