function myFunction(x) {
    return x(5);
}

const result = myFunction(function(apa){
    return apa * 100;
});


console.log(result);