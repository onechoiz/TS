// numbers like hex, decimal, binary, octal are all : number 
const decimal: number = 0.7
const hexNum : number = 0xf00f
const age : number = 10
// string is of type string 
const userName : string = "John"
// bools ar of type boolean
const isEmployed: boolean = false
const isStudent : boolean = true

// undefined 
const user: undefined = undefined
const  n: null = null

// arrays differ depending on what values they  include 
const fruits: Array <string> = ["banana", "strawberry", "apple"]
const fruits2: string[] = ["banana", "strawberry", "apple"]
let arr: any [] = [34, 'hello', {name:"john"},[1,2,3]]
arr[1] = "Hello World!"
console.log(arr)
const years : number[] = [2012, 2022, 2032]

// mixed type arr
let myMixedArr : (string | number)[] = ["33", 99]

// array methods
let arr2 : number[] = [22,44,24,33,66,77,95853]

let evenNumbers: number []=  arr2.filter(n => n%2 === 0)
let oddNums: number [] = arr2.filter(n => n%2 !== 0)
console.log(`even numbers: ${evenNumbers}, odd  numbers are : ${oddNums}`);
// tuples  are like arrays with differrent fixed types  having their indices fixed  
let  abc :[number , string ]= [6, 'hello']
const b: [boolean, string , number] = [ true, "hello",77]
// can also have type inference , so you it is inferred 
const myTuple = ["Macos", 2022, true, "Ubuntu", false]
// deconstruct a tuple 
let coordinates: [number, number] = [10, 20];
let [x, y] = coordinates;

console.log(x); // 10
console.log(y); // 20

// Tuples are commonly used to represent the parameters and return types of functions:

const getUser =(): [string , number]=>{
   return ["JOhn DOe", 33]
}

const user1: [string, number] =getUser()


console.log(`name is ${user1[0]},  age is ${user1[1]}`);