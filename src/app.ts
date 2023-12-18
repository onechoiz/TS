// numbers like hex, decimal, binary, octal are all : number
const decimal: number = 0.7;
const hexNum: number = 0xf00f;
const age: number = 10;
// string is of type string
const userName: string = "John";
// bools ar of type boolean
const isEmployed: boolean = false;
const isStudent: boolean = true;

// undefined
const user: undefined = undefined;
const n: null = null;

// arrays differ depending on what values they  include
const fruits: Array<string> = ["banana", "strawberry", "apple"];
const fruits2: string[] = ["banana", "strawberry", "apple"];
let arr: any[] = [34, "hello", { name: "john" }, [1, 2, 3]];
arr[1] = "Hello World!";
console.log(arr);
const years: number[] = [2012, 2022, 2032];

// mixed type arr
let myMixedArr: (string | number)[] = ["33", 99];

// array methods
let arr2: number[] = [22, 44, 24, 33, 66, 77, 95853];

let evenNumbers: number[] = arr2.filter((n) => n % 2 === 0);
let oddNums: number[] = arr2.filter((n) => n % 2 !== 0);
console.log(`even numbers: ${evenNumbers}, odd  numbers are : ${oddNums}`);
// tuples  are like arrays with differrent fixed types  having their indices fixed
let abc: [number, string] = [6, "hello"];
const b: [boolean, string, number] = [true, "hello", 77];
// can also have type inference , so you it is inferred
const myTuple = ["Macos", 2022, true, "Ubuntu", false];
// deconstruct a tuple
let coordinates: [number, number] = [10, 20];
let [x, y] = coordinates;

console.log(x); // 10
console.log(y); // 20

// Tuples are commonly used to represent the parameters and return types of functions:

const getUser = (): [string, number] => {
  return ["JOhn DOe", 33];
};

const user1: [string, number] = getUser();

console.log(`name is ${user1[0]},  age is ${user1[1]}`);

// type enums
// Enums provide a  way to work with sets of related constants here we have colors 
enum Colors{ Blue, Purple, Silver, Gold = 10}
// getting the index from Keys 
console.log(Colors.Blue)
// getting the key using index
console.log(Colors[10])

// practical use  of getting server res status 
enum HttpStatusCode {
    Ok = 200,
    NotFound = 404,
    IntrnalServerError = 500,

    
}

const handleHttpResp = (statusCode: HttpStatusCode) : void =>{
   if( statusCode === HttpStatusCode.Ok){
    console.log("request seccess");
   }else if (statusCode === HttpStatusCode.NotFound){
    console.log("not found");
   }else if(statusCode === HttpStatusCode.IntrnalServerError) {
    console.log("Server side error");
    
   }
   else{
    console.log("idk , some other  status code not handled here ");
   }
}
// if you just pass a numbr will result in type error 
handleHttpResp(HttpStatusCode.Ok)

const handleHttpRespNumber = (statusCode: number |  HttpStatusCode) : void =>{
   if( statusCode === HttpStatusCode.Ok){
    console.log("request seccess");
   }else if (statusCode === HttpStatusCode.NotFound){
    console.log("not found");
   }else if(statusCode === HttpStatusCode.IntrnalServerError) {
    console.log("Server side error");
    
   }
   else{
    console.log("idk , some other  status code not handled here ");
   }
}

handleHttpRespNumber(300) //idk , some other  status code not handled here
handleHttpRespNumber(HttpStatusCode.IntrnalServerError)//Server side error


//  const modifier can be used  to create enums that will only generate  the value when used and won't complie automatically
const enum Status {
    Success = 'success',
    Failure = 'failure'
}
// in js it will bw only compiled to var reqStaus = 0 /* Status.Success */; if not assigned to anything ,just - Success
// and var reqStaus = "success" /* Status.Success */; if assigned like above -  Success = 'success',
let reqStaus: Status = Status.Success 