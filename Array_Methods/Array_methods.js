// // 1. push()
// let arr = [1, 2];
// arr.push(3);
// console.log(arr);

// // 2. pop()
// let arr = [1, 2, 3];
// let removed = arr.pop();
// console.log(removed); 
// console.log(arr); 

// // 3. unshift()
// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr);

// 4. shift()
// let arr = [1, 2, 3];
// arr.shift(); 
// console.log(arr);

// 5. concat()
// let a = [1, 2], b = [3, 4],c=[56,57]
// let result = a.concat(b).concat(c);
// console.log(result);

// 6. indexOf()
// console.log([10,20,30].indexOf(20))

// 7. lastIndexOf()
// console.log([1,2,3,2].lastIndexOf(2))

// 8. includes()
// console.log([1,2,3].includes(2))

// 9. join()
// console.log(["b", "n", "n","a"].join("a"))

// 10. reverse()
// console.log([1,2,3].reverse())

// 11. sort()
// let arr=["girafee","apple","podi","ele","qwertyuiop"]
// console.log(arr.sort())


// console.log([10,2,5].sort((a,b)=>a-b))

// 12. slice()
// let nums = [10,20,30,40];
// nums.slice(1,3);

// 13. splice()
// let arr = [1,2,3,4];
// arr.splice(1,2);
// console.log(arr);


// arr.splice(1,0,99);

// 14. forEach()
// [1,2,3].forEach(n => console.log(n));

// 15. map()
// let doubled = [1,2,3].map(n => n*2);
// console.log(doubled);

// 16. filter()
// let even = [1,2,3,4].filter(n => n%2===0);
// console.log(even);

// 17. reduce()

// let total = [1,2,3].reduce((acc,c)=>acc+c,0);
// console.log(total);

// 18. find()
// [1,4,7,8].find(n => n > 5);

// 19. findIndex()
// [1,4,7,8].findIndex(n => n > 5);

// 20. every()
// [2,4,6].every(n=>n%2===0);

// 21. some()
// [1,3,4].some(n=>n%2===0);

// 22. flat()
// [1,[2,3],[4]].flat();

// 23. flatMap()
// ✔ map() + flat() (1 level)
// console.log(([1,2,3].flatMap(n => [n, n*2])));


// 24. fill()
// console.log([1,2,3,4].fill(0,0,2))


// 25. toString()

// console.log([1,2,3].toString())

// 26. at()

// let a = [10,20,30];
// console.log(a.at(1))

// 27. Array.isArray()

// console.log(Array.isArray([1,2]))
// console.log(Array.isArray("hello"))


// spread operator
// let arr1=[1,2]
// let arr2=[2,3]
// let arr3=[...arr1,...arr2]
// console.log(arr3)

let arr=[1,2,[3,4,[[[5],6],7]],8,[9,10,[11]],12,13,14,15,16]
// let arr1=arr.some(n=>n%2===1)
console.log(arr.flat(Infinity));