/*
Skriv en funktion som heter “A” som tar in ett argument, (x) som är en funktion.
Kalla på funktionen inuti funktionen. Spara resultatet i en variabel och printa ut värdet.
Kalla sedan på “A” funktionen och skicka in “add” funktionen du definierade i del 2.
*/

function add(x, y) {
    return x + y;
}

function A(x) {                   // x = add
    const result = x(5, 4);       // result = add(5, 4)
    console.log(result);
}

A(add);