// numbers like hex, decimal, binary, octal are all : number
var decimal = 0.7;
var hexNum = 0xf00f;
var age = 10;
// string is of type string
var userName = "John";
// bools ar of type boolean
var isEmployed = false;
var isStudent = true;
// undefined
var user = undefined;
var n = null;
// arrays differ depending on what values they  include
var fruits = ["banana", "strawberry", "apple"];
var fruits2 = ["banana", "strawberry", "apple"];
var arr = [34, "hello", { name: "john" }, [1, 2, 3]];
arr[1] = "Hello World!";
console.log(arr);
var years = [2012, 2022, 2032];
// mixed type arr
var myMixedArr = ["33", 99];
// array methods
var arr2 = [22, 44, 24, 33, 66, 77, 95853];
var evenNumbers = arr2.filter(function (n) { return n % 2 === 0; });
var oddNums = arr2.filter(function (n) { return n % 2 !== 0; });
console.log("even numbers: ".concat(evenNumbers, ", odd  numbers are : ").concat(oddNums));
// tuples  are like arrays with differrent fixed types  having their indices fixed
var abc = [6, "hello"];
var b = [true, "hello", 77];
// can also have type inference , so you it is inferred
var myTuple = ["Macos", 2022, true, "Ubuntu", false];
// deconstruct a tuple
var coordinates = [10, 20];
var x = coordinates[0], y = coordinates[1];
console.log(x); // 10
console.log(y); // 20
// Tuples are commonly used to represent the parameters and return types of functions:
var getUser = function () {
    return ["JOhn DOe", 33];
};
var user1 = getUser();
console.log("name is ".concat(user1[0], ",  age is ").concat(user1[1]));
// type enums
// Enums provide a  way to work with sets of related constants here we have colors 
var Colors;
(function (Colors) {
    Colors[Colors["Blue"] = 0] = "Blue";
    Colors[Colors["Purple"] = 1] = "Purple";
    Colors[Colors["Silver"] = 2] = "Silver";
    Colors[Colors["Gold"] = 10] = "Gold";
})(Colors || (Colors = {}));
// getting the index from Keys 
console.log(Colors.Blue);
// getting the key using index
console.log(Colors[10]);
// practical use  of getting server res status 
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["IntrnalServerError"] = 500] = "IntrnalServerError";
})(HttpStatusCode || (HttpStatusCode = {}));
var handleHttpResp = function (statusCode) {
    if (statusCode === HttpStatusCode.Ok) {
        console.log("request seccess");
    }
    else if (statusCode === HttpStatusCode.NotFound) {
        console.log("not found");
    }
    else if (statusCode === HttpStatusCode.IntrnalServerError) {
        console.log("Server side error");
    }
    else {
        console.log("idk , some other  status code not handled here ");
    }
};
// if you just pass a numbr will result in type error 
handleHttpResp(HttpStatusCode.Ok);
var handleHttpRespNumber = function (statusCode) {
    if (statusCode === HttpStatusCode.Ok) {
        console.log("request seccess");
    }
    else if (statusCode === HttpStatusCode.NotFound) {
        console.log("not found");
    }
    else if (statusCode === HttpStatusCode.IntrnalServerError) {
        console.log("Server side error");
    }
    else {
        console.log("idk , some other  status code not handled here ");
    }
};
handleHttpRespNumber(300); //idk , some other  status code not handled here
handleHttpRespNumber(HttpStatusCode.IntrnalServerError); //Server side error
// in js it will bw only compiled to var reqStaus = 0 /* Status.Success */;
var reqStaus = "success" /* Status.Success */;
