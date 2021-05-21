function doSomething(hejhej) {
    const result = hejhej(5);
    return result;
}

const result = doSomething(x => x * 30);

const result2 = doSomething(function(x){
    return x * 30;
})

console.log(result);