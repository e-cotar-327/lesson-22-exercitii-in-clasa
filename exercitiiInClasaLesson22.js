/*
1. Declarati doua variabile si afisati cea mai mare dintre ele
2. Declarati 3 variabile, doua dintre care sunt numere si unul simbol. Afisasi doar simbolul din toate variabilile. Ex. valorile: 3, -, 7
Afisam: simbolul –
3. Scrieti o conditie care sa afiseze 3 numere in ordine crescatoare. Afisati rezultatul in console
Exemplu : 0, -1, 4
Afisam: 4, 0, -1
4. Scrieti o conditie care sa afiseze numai numarul cel mai mare.
Exemplu : -5, -2, -6, 0, -1
Afisam: 0
Toate datele initiale trebuie salvate in variabile. Toate rezultatele trebuie afisate in 
console.log(). Testati codul prin schimbarea valorilor initiale.
*/

// exercitiul 1
const var1 = -56
const var2 = -26

if (var1 > var2) {
    console.log(var1, 'este variabila cea mai mare')
} else if (var2 > var1) {
    console.log(var2, 'este variabila cea mai mare')
} else {
    console.log('se pare ca numerele sunt egale')
}

// exercitiul 2

const varOne = 26
const varTwo = '-'
const varThree = -35

if (typeof varOne !== 'number') {
    console.log(varOne)
} else if (typeof varTwo !== 'number') {
    console.log(varTwo)
} else if (typeof varThree !== 'number') {
    console.log(varThree)
}

// exercitiul 3: Ordine descrescatoare

console.log('exercitiul 3: Ordine descrescatoare')
const numOne = -10230;
const numTwo = 223;
const numThree = 26007;

if (numOne > numTwo && numOne > numThree) {
    if (numTwo > numThree) {
        console.log(`${numOne} ${numTwo} ${numThree}`)
    } else {
        console.log(`${numOne} ${numThree} ${numTwo}`)
    }
} else if (numTwo > numOne && numTwo > numThree) {
    if (numOne > numThree) {
        console.log(`${numTwo} ${numOne} ${numThree}`)
    } else {
        console.log(`${numTwo} ${numThree} ${numOne}`)
    }
} else {
    if (numOne > numTwo) {
        console.log(`${numThree} ${numOne}  ${numTwo}`)
    } else {
        console.log(`${numThree} ${numTwo}  ${numOne}`)
    }
}

// exercitiul 4: max din toate
console.log('exercitiul 4')
const first = 1000;
const second = -1000;
const third = 123;
const fourth = 123;
const fifth = 5710;

if (first >= second && first >= third && first >= fourth && first >= fifth) {
    console.log(first);
} else if (second >= third && second >= fourth && second >= fifth) {
    console.log(second);
} else if (third >= fourth && third >= fifth) {
    console.log(third);
} else if (fourth >= fifth) {
    console.log(fourth);
} else {
    console.log(fifth);
}
