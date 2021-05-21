/* Allt utanfor funktioner finns i det globala scopet */
/* Man kan tanka bokhyllan med hyllor i, och variablerna ar namnen pa hyllorna */
/*  
    ============= globala hyllan ================
    
    [ apa ]         [ 123 ]
    [ firstname ]   ["Sebastian"]
*/

const apa = 123; // number
const firstname = "Sebastian"; // string


function doSomething(apa, bepa, pepa) {
    /*  (lokalt scope)
    ============= lokal hylla ================
    
    [ apa ]         [ "tja" ]
    [ bepa ]        [ "tjena" ]
    [ pepa ]        [ 1337 ]
    [ hej ]         [ 1 ]
    */

    const hej = 1;
    console.log(firstname);
}

doSomething("tja", "tjena", 1337);

console.log(firstname);