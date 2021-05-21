
// 1. Samma som 2
const doSomething = apa => apa(5) + 10;

// 2
function doSomething2(apa) {
    return apa(5) + 10;
}


// 3.  samma som 4
const result = doSomething(x => x / 2);
console.log(result);

// 4
const result2 = doSomething(function(x) {
    return x / 2;
})
console.log(result2);