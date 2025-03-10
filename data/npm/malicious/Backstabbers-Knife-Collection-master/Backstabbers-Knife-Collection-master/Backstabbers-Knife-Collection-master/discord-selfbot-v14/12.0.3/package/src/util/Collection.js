const util = require("util");

/**
 * A Map with additional utility methods. This is used throughout discord.js rather than Arrays for anything that has
 * an ID, for significantly improved performance and ease-of-use.
 * @extends {Map}
 */
class Collection extends Map {
  constructor(iterable) {
    super(iterable);

    /**
     * Cached array for the `array()` method - will be reset to `null` whenever `set()` or `delete()` are called
     * @name Collection#_array
     * @type {?Array}
     * @private
     */
    Object.defineProperty(this, "_array", {
      value: null,
      writable: true,
      configurable: true
    });

    /**
     * Cached array for the `keyArray()` method - will be reset to `null` whenever `set()` or `delete()` are called
     * @name Collection#_keyArray
     * @type {?Array}
     * @private
     */
    Object.defineProperty(this, "_keyArray", {
      value: null,
      writable: true,
      configurable: true
    });
  }

  set(key, val) {
    this._array = null;
    this._keyArray = null;
    return super.set(key, val);
  }

  delete(key) {
    this._array = null;
    this._keyArray = null;
    return super.delete(key);
  }

  /**
   * Creates an ordered array of the values of this collection, and caches it internally. The array will only be
   * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
   * itself. If you don't want this caching behavior, use `[...collection.values()]` or
   * `Array.from(collection.values())` instead.
   * @returns {Array}
   */
  array() {
    if (!this._array || this._array.length !== this.size)
      this._array = [...this.values()];
    return this._array;
  }

  /**
   * Creates an ordered array of the keys of this collection, and caches it internally. The array will only be
   * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
   * itself. If you don't want this caching behavior, use `[...collection.keys()]` or
   * `Array.from(collection.keys())` instead.
   * @returns {Array}
   */
  keyArray() {
    if (!this._keyArray || this._keyArray.length !== this.size)
      this._keyArray = [...this.keys()];
    return this._keyArray;
  }

  /**
   * Obtains the first value(s) in this collection.
   * @param {number} [count] Number of values to obtain from the beginning
   * @returns {*|Array<*>} The single value if `count` is undefined, or an array of values of `count` length
   */
  first(count) {
    if (count === undefined) return this.values().next().value;
    if (typeof count !== "number")
      throw new TypeError("The count must be a number.");
    if (!Number.isInteger(count) || count < 1)
      throw new RangeError("The count must be an integer greater than 0.");
    count = Math.min(this.size, count);
    const arr = new Array(count);
    const iter = this.values();
    for (let i = 0; i < count; i++) arr[i] = iter.next().value;
    return arr;
  }

  /**
   * Obtains the first key(s) in this collection.
   * @param {number} [count] Number of keys to obtain from the beginning
   * @returns {*|Array<*>} The single key if `count` is undefined, or an array of keys of `count` length
   */
  firstKey(count) {
    if (count === undefined) return this.keys().next().value;
    if (typeof count !== "number")
      throw new TypeError("The count must be a number.");
    if (!Number.isInteger(count) || count < 1)
      throw new RangeError("The count must be an integer greater than 0.");
    count = Math.min(this.size, count);
    const arr = new Array(count);
    const iter = this.keys();
    for (let i = 0; i < count; i++) arr[i] = iter.next().value;
    return arr;
  }

  /**
   * Obtains the last value(s) in this collection. This relies on {@link Collection#array}, and thus the caching
   * mechanism applies here as well.
   * @param {number} [count] Number of values to obtain from the end
   * @returns {*|Array<*>} The single value if `count` is undefined, or an array of values of `count` length
   */
  last(count) {
    const arr = this.array();
    if (count === undefined) return arr[arr.length - 1];
    if (typeof count !== "number")
      throw new TypeError("The count must be a number.");
    if (!Number.isInteger(count) || count < 1)
      throw new RangeError("The count must be an integer greater than 0.");
    return arr.slice(-count);
  }

  /**
   * Obtains the last key(s) in this collection. This relies on {@link Collection#keyArray}, and thus the caching
   * mechanism applies here as well.
   * @param {number} [count] Number of keys to obtain from the end
   * @returns {*|Array<*>} The single key if `count` is undefined, or an array of keys of `count` length
   */
  lastKey(count) {
    const arr = this.keyArray();
    if (count === undefined) return arr[arr.length - 1];
    if (typeof count !== "number")
      throw new TypeError("The count must be a number.");
    if (!Number.isInteger(count) || count < 1)
      throw new RangeError("The count must be an integer greater than 0.");
    return arr.slice(-count);
  }

  /**
   * Obtains random value(s) from this collection. This relies on {@link Collection#array}, and thus the caching
   * mechanism applies here as well.
   * @param {number} [count] Number of values to obtain randomly
   * @returns {*|Array<*>} The single value if `count` is undefined, or an array of values of `count` length
   */
  random(count) {
    let arr = this.array();
    if (count === undefined) return arr[Math.floor(Math.random() * arr.length)];
    if (typeof count !== "number")
      throw new TypeError("The count must be a number.");
    if (!Number.isInteger(count) || count < 1)
      throw new RangeError("The count must be an integer greater than 0.");
    if (arr.length === 0) return [];
    const rand = new Array(count);
    arr = arr.slice();
    for (let i = 0; i < count; i++)
      rand[i] = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    return rand;
  }

  /**
   * Obtains random key(s) from this collection. This relies on {@link Collection#keyArray}, and thus the caching
   * mechanism applies here as well.
   * @param {number} [count] Number of keys to obtain randomly
   * @returns {*|Array<*>} The single key if `count` is undefined, or an array of keys of `count` length
   */
  randomKey(count) {
    let arr = this.keyArray();
    if (count === undefined) return arr[Math.floor(Math.random() * arr.length)];
    if (typeof count !== "number")
      throw new TypeError("The count must be a number.");
    if (!Number.isInteger(count) || count < 1)
      throw new RangeError("The count must be an integer greater than 0.");
    if (arr.length === 0) return [];
    const rand = new Array(count);
    arr = arr.slice();
    for (let i = 0; i < count; i++)
      rand[i] = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    return rand;
  }

  /**
   * Searches for all items where their specified property's value is identical to the given value
   * (`item[prop] === value`).
   * @param {string} prop The property to test against
   * @param {*} value The expected value
   * @returns {Array}
   * @deprecated
   * @example
   * collection.findAll('username', 'Bob');
   */
  findAll(prop, value) {
    if (typeof prop !== "string") throw new TypeError("Key must be a string.");
    if (typeof value === "undefined")
      throw new Error("Value must be specified.");
    const results = [];
    for (const item of this.values()) {
      if (item[prop] === value) results.push(item);
    }
    return results;
  }

  /**
   * Searches for a single item where its specified property's value is identical to the given value
   * (`item[prop] === value`), or the given function returns a truthy value. In the latter case, this is identical to
   * [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
   * <warn>All collections used in Discord.js are mapped using their `id` property, and if you want to find by id you
   * should use the `get` method. See
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) for details.</warn>
   * @param {string|Function} propOrFn The property to test against, or the function to test with
   * @param {*} [value] The expected value - only applicable and required if using a property for the first argument
   * @returns {*}
   * @example
   * collection.find('username', 'Bob');
   * @example
   * collection.find(val => val.username === 'Bob');
   */
  find(propOrFn, value) {
    if (typeof propOrFn === "string") {
      if (typeof value === "undefined")
        throw new Error("Value must be specified.");
      for (const item of this.values()) {
        if (item[propOrFn] === value) return item;
      }
      return null;
    } else if (typeof propOrFn === "function") {
      for (const [key, val] of this) {
        if (propOrFn(val, key, this)) return val;
      }
      return null;
    } else {
      throw new Error(
        "First argument must be a property string or a function."
      );
    }
  }

  /* eslint-disable max-len */
  /**
   * Searches for the key of a single item where its specified property's value is identical to the given value
   * (`item[prop] === value`), or the given function returns a truthy value. In the latter case, this is identical to
   * [Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
   * @param {string|Function} propOrFn The property to test against, or the function to test with
   * @param {*} [value] The expected value - only applicable and required if using a property for the first argument
   * @returns {*}
   * @example
   * collection.findKey('username', 'Bob');
   * @example
   * collection.findKey(val => val.username === 'Bob');
   */
  findKey(propOrFn, value) {
    /* eslint-enable max-len */
    if (typeof propOrFn === "string") {
      if (typeof value === "undefined")
        throw new Error("Value must be specified.");
      for (const [key, val] of this) {
        if (val[propOrFn] === value) return key;
      }
      return null;
    } else if (typeof propOrFn === "function") {
      for (const [key, val] of this) {
        if (propOrFn(val, key, this)) return key;
      }
      return null;
    } else {
      throw new Error(
        "First argument must be a property string or a function."
      );
    }
  }

  /**
   * Searches for the existence of a single item where its specified property's value is identical to the given value
   * (`item[prop] === value`).
   * <warn>Do not use this to check for an item by its ID. Instead, use `collection.has(id)`. See
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has) for details.</warn>
   * @param {string} prop The property to test against
   * @param {*} value The expected value
   * @returns {boolean}
   * @deprecated
   * @example
   * if (collection.exists('username', 'Bob')) {
   *  console.log('user here!');
   * }
   */
  exists(prop, value) {
    return Boolean(this.find(prop, value));
  }

  /**
   * Removes entries that satisfy the provided filter function.
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {Object} [thisArg] Value to use as `this` when executing function
   * @returns {number} The number of removed entries
   */
  sweep(fn, thisArg) {
    if (thisArg) fn = fn.bind(thisArg);
    const previousSize = this.size;
    for (const [key, val] of this) {
      if (fn(val, key, this)) this.delete(key);
    }
    return previousSize - this.size;
  }

  /**
   * Identical to
   * [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   * but returns a Collection instead of an Array.
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {Object} [thisArg] Value to use as `this` when executing function
   * @returns {Collection}
   */
  filter(fn, thisArg) {
    if (thisArg) fn = fn.bind(thisArg);
    const results = new Collection();
    for (const [key, val] of this) {
      if (fn(val, key, this)) results.set(key, val);
    }
    return results;
  }

  /**
   * Identical to
   * [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {Object} [thisArg] Value to use as `this` when executing function
   * @returns {Array}
   * @deprecated
   */
  filterArray(fn, thisArg) {
    if (thisArg) fn = fn.bind(thisArg);
    const results = [];
    for (const [key, val] of this) {
      if (fn(val, key, this)) results.push(val);
    }
    return results;
  }

  /**
   * Partitions the collection into two collections where the first collection
   * contains the items that passed and the second contains the items that failed.
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {*} [thisArg] Value to use as `this` when executing function
   * @returns {Collection[]}
   * @example const [big, small] = collection.partition(guild => guild.memberCount > 250);
   */
  partition(fn, thisArg) {
    if (typeof thisArg !== "undefined") fn = fn.bind(thisArg);
    const results = [new Collection(), new Collection()];
    for (const [key, val] of this) {
      if (fn(val, key, this)) {
        results[0].set(key, val);
      } else {
        results[1].set(key, val);
      }
    }
    return results;
  }

  /**
   * Identical to
   * [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
   * @param {Function} fn Function that produces an element of the new array, taking three arguments
   * @param {*} [thisArg] Value to use as `this` when executing function
   * @returns {Array}
   */
  map(fn, thisArg) {
    if (thisArg) fn = fn.bind(thisArg);
    const arr = new Array(this.size);
    let i = 0;
    for (const [key, val] of this) arr[i++] = fn(val, key, this);
    return arr;
  }

  /**
   * Identical to
   * [Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {Object} [thisArg] Value to use as `this` when executing function
   * @returns {boolean}
   */
  some(fn, thisArg) {
    if (thisArg) fn = fn.bind(thisArg);
    for (const [key, val] of this) {
      if (fn(val, key, this)) return true;
    }
    return false;
  }

  /**
   * Identical to
   * [Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
   * @param {Function} fn Function used to test (should return a boolean)
   * @param {Object} [thisArg] Value to use as `this` when executing function
   * @returns {boolean}
   */
  every(fn, thisArg) {
    if (thisArg) fn = fn.bind(thisArg);
    for (const [key, val] of this) {
      if (!fn(val, key, this)) return false;
    }
    return true;
  }

  /**
   * Identical to
   * [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
   * @param {Function} fn Function used to reduce, taking four arguments; `accumulator`, `currentValue`, `currentKey`,
   * and `collection`
   * @param {*} [initialValue] Starting value for the accumulator
   * @returns {*}
   */
  reduce(fn, initialValue) {
    let accumulator;
    if (typeof initialValue !== "undefined") {
      accumulator = initialValue;
      for (const [key, val] of this)
        accumulator = fn(accumulator, val, key, this);
    } else {
      let first = true;
      for (const [key, val] of this) {
        if (first) {
          accumulator = val;
          first = false;
          continue;
        }
        accumulator = fn(accumulator, val, key, this);
      }
    }
    return accumulator;
  }

  /**
   * Identical to
   * [Map.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach),
   * but returns the collection instead of undefined.
   * @param {Function} fn Function to execute for each element
   * @param {*} [thisArg] Value to use as `this` when executing function
   * @returns {Collection}
   * @example
   * collection
   *  .tap(user => console.log(user.username))
   *  .filter(user => user.bot)
   *  .tap(user => console.log(user.username));
   */
  tap(fn, thisArg) {
    this.forEach(fn, thisArg);
    return this;
  }

  /**
   * Creates an identical shallow copy of this collection.
   * @returns {Collection}
   * @example const newColl = someColl.clone();
   */
  clone() {
    return new this.constructor(this);
  }

  /**
   * Combines this collection with others into a new collection. None of the source collections are modified.
   * @param {...Collection} collections Collections to merge
   * @returns {Collection}
   * @example const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);
   */
  concat(...collections) {
    const newColl = this.clone();
    for (const coll of collections) {
      for (const [key, val] of coll) newColl.set(key, val);
    }
    return newColl;
  }

  /**
   * Calls the `delete()` method on all items that have it.
   * @returns {Promise[]}
   */
  deleteAll() {
    const returns = [];
    for (const item of this.values()) {
      if (item.delete) returns.push(item.delete());
    }
    return returns;
  }

  /**
   * Checks if this collection shares identical key-value pairings with another.
   * This is different to checking for equality using equal-signs, because
   * the collections may be different objects, but contain the same data.
   * @param {Collection} collection Collection to compare with
   * @returns {boolean} Whether the collections have identical contents
   */
  equals(collection) {
    if (!collection) return false;
    if (this === collection) return true;
    if (this.size !== collection.size) return false;
    return !this.find((value, key) => {
      const testVal = collection.get(key);
      return (
        testVal !== value || (testVal === undefined && !collection.has(key))
      );
    });
  }

  /**
   * The sort() method sorts the elements of a collection in place and returns the collection.
   * The sort is not necessarily stable. The default sort order is according to string Unicode code points.
   * @param {Function} [compareFunction] Specifies a function that defines the sort order.
   * if omitted, the collection is sorted according to each character's Unicode code point value,
   * according to the string conversion of each element.
   * @returns {Collection}
   */
  sort(compareFunction = (x, y) => +(x > y) || +(x === y) - 1) {
    return new Collection(
      [...this.entries()].sort((a, b) =>
        compareFunction(a[1], b[1], a[0], b[0])
      )
    );
  }
}

Collection.prototype.findAll = util.deprecate(
  Collection.prototype.findAll,
  "Collection#findAll: use Collection#filter instead"
);

Collection.prototype.filterArray = util.deprecate(
  Collection.prototype.filterArray,
  "Collection#filterArray: use Collection#filter instead"
);

Collection.prototype.exists = util.deprecate(
  Collection.prototype.exists,
  "Collection#exists: use Collection#some instead"
);

Collection.prototype.find = function find(propOrFn, value) {
  if (typeof propOrFn === "string") {
    process.emitWarning(
      "Collection#find: pass a function instead",
      "DeprecationWarning"
    );
    if (typeof value === "undefined")
      throw new Error("Value must be specified.");
    for (const item of this.values()) {
      if (item[propOrFn] === value) return item;
    }
    return null;
  } else if (typeof propOrFn === "function") {
    for (const [key, val] of this) {
      if (propOrFn(val, key, this)) return val;
    }
    return null;
  } else {
    throw new Error("First argument must be a property string or a function.");
  }
};

Collection.prototype.findKey = function findKey(propOrFn, value) {
  if (typeof propOrFn === "string") {
    process.emitWarning(
      "Collection#findKey: pass a function instead",
      "DeprecationWarning"
    );
    if (typeof value === "undefined")
      throw new Error("Value must be specified.");
    for (const [key, val] of this) {
      if (val[propOrFn] === value) return key;
    }
    return null;
  } else if (typeof propOrFn === "function") {
    for (const [key, val] of this) {
      if (propOrFn(val, key, this)) return key;
    }
    return null;
  } else {
    throw new Error("First argument must be a property string or a function.");
  }
};

module.exports = Collection;
