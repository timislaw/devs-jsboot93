const products = [{name: 'computer mouse'}];
const product = products[0];


//Truthy - Values that resolve to true in boolean context

//Falsy- values that resolve to false in boolean context

//Falsy values - false, 0, empty string, null, undefined, NaN
//anything else not above is truthy


if (product) {
    console.log('product found')
} else {
    console.log('product not found')
};
