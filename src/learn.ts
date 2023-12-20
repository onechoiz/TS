let my_age: number = 30;

// giving an initial value , we can later include the arg or not
const totalPrice = (price: number, tax = 10): number => {
  let taxed = (price * tax) / 100;
  return taxed + price;
};

// console.log(totalPrice(33, 10));
// console.log(totalPrice(33));

// objects

let studnet: Student= {
  id: Math.random(),
  name: "John",
  email: "",
};

// type alias with PascalCase
type Student =  {  id: number;
  name: string;
  email: string;
} 
// console.log("Student Name is ",studnet.name);

function lbToKg(weight:number | string ) : number {
     let conversion_factor = 0.453592
    if (typeof weight === 'string'){
        // convert from pounds to kg
      let  weightInKG =  (+weight *  conversion_factor)
      console.log( typeof(weightInKG));
        return  +weightInKG.toFixed(2)
        }
        else{
         return +(weight *  conversion_factor).toFixed(2)
        }
   
}

console.log(lbToKg(4));
console.log(lbToKg("4"));


