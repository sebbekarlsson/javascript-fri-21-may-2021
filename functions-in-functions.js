function doSomethingWithNumbers(hej, x, y) {          // 1. denna defineras men kors inte
    const result = hej(x, y);                         // 4. Nu kors "bepa" funktionen vi skickat in
    console.log(result);                              // 6. Nu printas resultet ut som
                                                      //    bepa har returnerat.  (hej = bepa)
}


function bepa(a, b) {                                // 2.  denna defineras men kors inte
    return a * b;                                    // 5.  Nu raknas detta ut och returneras
    // 10 * 20
    // eftersom att
    // a = x
    // b = y
    // x = 10
    // y = 20
}

doSomethingWithNumbers(bepa, 10, 20);                // 3. Vi kallar pa doSomethingWithNumbers
                                                     // hej = bepa
                                                     // x = 10
                                                     // y = 20