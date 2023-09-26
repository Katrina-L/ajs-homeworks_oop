const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

export default class Character {
    constructor(name, type) {
        if ( typeof name === "string" && name.length >= 2 && name.length <= 10 ) {
            this.name = name;
        } else {
            throw new Error("invalid name");
        };

        if ( typeof type === "string" && types.includes(type) ) {
            this.type = type;
        } else {
            throw new Error("invalid type");
        };

        this.health = 100;
        this.level = 1;
    };

    levelUp() {
        if ( this.health > 0 ) {
            this.level ++;
            this.attack = Math.round(this.attack * 1.2);
            this.defence = Math.round(this.defence * 1.2);
            this.health = 100;
        } else {
            throw new Error("Нельзя повысить уровень умершего игрока");
        }
    };

    damage(points) {
        /* istanbul ignore else */
        if ( this.health > 0 ) {
            this.health -= Math.round(points * ( 1 - this.defence / 100 ));
            if ( this.health <=0 ) {
                throw new Error ("Игрок боле не живой");
            };
        };
    };
};