var my_age = 30;
// giving an initial value , we can later include the arg or not
var totalPrice = function (price, tax) {
    if (tax === void 0) { tax = 10; }
    var taxed = (price * tax) / 100;
    return taxed + price;
};
// console.log(totalPrice(33, 10));
// console.log(totalPrice(33));
// objects
var studnet = {
    id: Math.random(),
    name: "John",
    email: "",
};
// console.log("Student Name is ",studnet.name);
function lbToKg(weight) {
    var conversion_factor = 0.453592;
    if (typeof weight === 'string') {
        // convert from pounds to kg
        var weightInKG = (+weight * conversion_factor);
        console.log(typeof (weightInKG));
        return +weightInKG.toFixed(2);
    }
    else {
        return +(weight * conversion_factor).toFixed(2);
    }
}
console.log(lbToKg(4));
console.log(lbToKg("4"));
