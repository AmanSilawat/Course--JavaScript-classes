// Singletons in JavaScript (Testing)
class Setting {
    constructor() {
        // console.log(Setting.prototype);
        // console.log(Setting.instance);
        if (Setting.instance instanceof Setting) {
            return Setting.instance;
        }
        this.settingObject = {
            background: '#ff0000',
            version: Math.floor(Math.random() * 4000),
        };
        this.test = 'hello';

        Object.freeze(this.settingObject);
        Object.freeze(this);
        Setting.instance = this;
    }

    get(key) {
        return this.settingObject[key];
    }
}

const s = new Setting(); // create s instance
const a = new Setting(); // create a instance

console.log(a.test); // hello
a.test = 'not Modified'; // deep freeze is working.
console.log(a.test); // hello

console.log(s.settingObject.version); // both result are same (your class is freezed)
console.log(a.settingObject.version); // both result are same (your class is freezed)

// ..
// ..
// ******** Without Freeze *********

const obj = {
    prop() {},
    foo: 'bar',
};

obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

//..
//..
//..
// ******** Freeze.*********
// The object being frozen is immutable.

const o = Object.freeze(obj);

// The return value is just the same object we passed in.
o === obj; // true

Object.isFrozen(obj); // === true

// Now any changes will fail
obj.foo = 'text'; // silently does nothing
obj.abc = 'text abc'; // silently does nothing

('use strict');
obj.foo = 'text'; // silently does nothing
obj.abc = 'text abc'; // silently does nothing

function fail() {
    'use strict';
    obj.foo = 'sparky'; // throws a TypeError
    delete obj.foo; // throws a TypeError
    delete obj.quaxxor; // returns true since attribute 'quaxxor' was never added
    obj.sparky = 'arf'; // throws a TypeError
}

// fail();  // uncomment to check this function

// Attempted changes through Object.defineProperty;
//Object.defineProperty(obj, 'abc', { value: 18 });        //* throw error *

// It's also impossible to change the prototype
// Object.setPrototypeOf(obj, { x: 20 })                   //* throw error *
// obj.__proto__ = { x: 20 }                               //* throw error *

// ..
// ....
// ......
// ** Freezing arrays **

let aa = [0];
Object.freeze(aa); // The array cannot be modified now.

aa[0] = 1; // fails silently

// In strict mode such attempt will throw a TypeError
function fail() {
    'use strict';
    aa[0] = 1;
}

// fail();

// aa.push(2); // throws a TypeError

const obj1 = {
    internal: {},
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a; // 'aValue'

// ..
// ....
// ......
// ****** how to deep freeze ********
const obj2 = {
    internal: {
        a: null,
        b: {
            c: {
                d: null,
            },
        },
    },
};

function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Object.getOwnPropertyNames(object);

    // Freeze properties before freezing self

    for (const name of propNames) {
        console.log(name, '--', object[name]);
        const value = object[name];

        if (value && typeof value == 'object') {
            deepFreeze(value);
        }
    }
    console.log('++++++++++++', object);
    return Object.freeze(object);
}

// deepFreeze(obj2);
// obj2.internal.b.c.d = '444';
// console.log(obj2)

obj2.internal.a = 'anotherValue'; // fails silently in non-strict mode
obj2.internal.a; // null
