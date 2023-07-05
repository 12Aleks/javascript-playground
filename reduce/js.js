const departments = [
    {name: 'Bob', department: 'SALE DEPARTMENT'},
    {name: 'John', department: 'IT'},
    {name: 'Sara', department: 'HR'},
    {name: 'Jim', department: 'HR'},
    {name: 'Tony', department: 'IT'},
    {name: 'Karl', department: 'SALE DEPARTMENT'},
    {name: 'Rob', department: 'HR'},
    {name: 'Ana', department: 'RECEPTION'}
]

let fruits = ['banan', 'ananas', 'apple', 'banan', 'apple', 'pear', 'apple' ]

let allFruits = fruits.reduce((obj, fruit) => ((obj[fruit] = (obj[fruit]||0) + 1), obj), {})
console.log(allFruits);

//how many people are in the departments
let result = departments.reduce((obj, el) => 
 ((obj[el.department] = obj[el.department] || []).push(el), obj )
, {})

console.log(result);