class SquirellClass {
    constructor(name, age) {
        this._name = name; //.name = public
        this._age = age; //._age = privat
    }

    set age(age) {
        if (typeof age !== 'number') {
            throw new TypeError('Age must be a nummber');
        }
        if (age <= 0 || age > 50 || !Number.isInteger(age)) {
            throw new RangeError('Age must be an integer value within 0 and 50')
        }
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (name.length > 128 || !name) {
            throw new RangeError('Name must be within 1 and 128!');
        }

        this._name = name;
    }

    get name () {
        return this._name;
    }

    sayHi() {
        return `hi, my name is ${this.name}`;
    }
}

class User {
    constructor (name, age, isMale, isBanned = false) {
        this._name = name;
        this._age = age;
        this._isMale = isMale;
        this._isBanned = isBanned;
    }

    set name(name) {

        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (name.length > 128 || !name) {
            throw new RangeError('Name must be within 1 and 128!');
        }

        this._name = name;
    }
    get name() {
        return this._name;
    }

    set age (age) {

        if (typeof age !== 'number') {
            throw new TypeError('Age must be a nummber');
        }
        if (age <= 0 || age > 120 || !Number.isInteger(age)) {
            throw new RangeError('Age must be an integer value within 0 and 120')
        }
        this._age = age;
    }
    get age() {
        return this._age;
    }

    set isMale(isMale) {
        if (typeof isMale !== 'boolean') {
            throw new TypeError('isMale must be a boolean value');
        }
        this._isMale = isMale;
    }

    get isBanned() {
        return this._isBanned;
    }

    set isBanned(isBanned) {
        if (typeof isBanned !== 'boolean') {
            throw new TypeError('isBanned must be a boolean value');
        }
        this._isBanned = isBanned;
    }

    get isBanned() {
        return this._isBanned;
    }

    sayHi() {
        return `hi, my name is ${this.name}`;
    }

    sendMessage(string) {
        console.log(`${this.name}: ${string}`);
    }
}

class Admin extends User {
    constructor(name, age, isMale, isBanned) {
        super(name, age, isMale, isBanned);
    }

    banUser(user, status) {
        user.isBanned = status;
    }
}

const user = new User('Vanya', 25, true, false);
const admin = new Admin('Vova', 45, true, false);

