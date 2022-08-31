const deepEquals = (val1, val2) => {
    if (val1 === val2) return true;
    if (typeof val1 !== 'object' ||
        val1 === null ||
        typeof val2 !== "object" ||
        val2 === null) {

        return false;
    }
    let keysOfVal1 = Object.keys(val1),
        keysOfVal2 = Object.keys(val2)

        if(keysOfVal1.length!==val2.length) return false

        for(let key of keysOfVal1){
            if(!keysOfVal2.includes(key)) return false;
            if(!deepEquals(val1[key],val2[key])) return false
        }
        return true
}

//Numbers
console.log("Numbers");
console.log(deepEquals(1,1));
console.log(deepEquals(15,15));
console.log(deepEquals(0, 1));
console.log(deepEquals(1, 0));
console.log(deepEquals(1, 10));
console.log(deepEquals(10, 1));


//Strings
console.log("Strings");
console.log(deepEquals("", ""));
console.log(deepEquals("a", "a"));
console.log(deepEquals("abc", "abc"));
console.log(deepEquals("", "a"));
console.log(deepEquals("a", ""));
console.log(deepEquals("a", "b"));
console.log(deepEquals("hello", "world"));
console.log(deepEquals("ab", "abc"));
console.log(deepEquals("abc", "ab"));

//Arrays
console.log("Array");
// console.log(deepEquals(deepEquals([], [])));
console.log(deepEquals([1], [1]));
console.log(deepEquals([0, 1, 2], [0, 1, 2]));
console.log(deepEquals([0, "abc", 2], [0, "abc", 2]));
console.log(deepEquals([null, undefined, true], [null, undefined, true]));


//Objects
console.log("Objects");
// console.log(deepEquals(deepEquals({}, {})));
console.log(deepEquals({ a: 123 }, { a: 123 }));
console.log(deepEquals({ a: "123" }, { a: "123" }));
console.log(deepEquals({ a: 123, b: "abc" }, { a: 123, b: "abc" }));
console.log(deepEquals({ a: 123, c: true, b: "abc" }, { a: 123, b: "abc", c: true }));

//Nested objects and arrays
console.log('Nested objects and arrays');
console.log(deepEquals([[1]], [[1]]));
console.log(deepEquals([[1], [2]], [[1], [2]]));
console.log(deepEquals([[1, true, "abc"], [2]], [[1, true, "abc"], [2]]));
console.log(deepEquals([[1, [2, 3, [4, 5]]], [2]], [[1, [2, 3, [4, 5]]], [2]]));
console.log(deepEquals([], [[]]));
console.log(deepEquals([[]], []));
console.log(deepEquals([[1]], [[]]));
console.log(deepEquals([[]], [[1]]));
console.log(deepEquals([[1]], [[0]]));
console.log(deepEquals([[0, []]], [[0]]));
console.log(deepEquals([[0]], [[0, []]]));
console.log(deepEquals([[0, [1, 2]]], [[0, [1]]]));
console.log(deepEquals([[0, [1]]], [[0, [1, 2]]]));
console.log(deepEquals([[1, true, "abc"], [2]], [[1, true, "abc"]]));
console.log(deepEquals([[1, [2, [4, 5]]], [2]], [[1, [2, 3, [4, 5]]], [2]]));
console.log(deepEquals([[1, [2, "3", [4, 5]]], [2]], [[1, [2, 3, [4, 5]]], [2]]));