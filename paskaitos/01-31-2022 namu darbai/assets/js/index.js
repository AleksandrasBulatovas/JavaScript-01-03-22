
//----Pirma
var vardas = 'As esu';
var pavarde = ' Aleksandras Bulatovas';
var gimimoMetai = ' gimes 1993-12-12';
console.log(vardas + pavarde + gimimoMetai)



//----Antra
function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}

var random = randomSkaicius (0, 10);
console.log('Random: ', random); //- consolei ('bla bla: ', tada kintamojo pav); ir gaunu kaip title/pav.

//----Trecia
var x = randomSkaicius (0, 4)
var y = randomSkaicius (0, 4)
console.log('x: ', x)
console.log('y: ', y)

var rezultatas;

rezultatas = x + y;
console.log('Sudetis: ', rezultatas);

rezultatas = x - y;
console.log('Atimtis: ', rezultatas);

rezultatas = x * y;
console.log('Daugyba: ', rezultatas);

rezultatas = x / y;
console.log('Dalyba:  ', rezultatas);

//----Ketvirta
var a = randomSkaicius (0, 25)
var b = randomSkaicius (0, 25)
var c = randomSkaicius (0, 25)

console.log({a}); 
console.log({b});
console.log({c});
//-arba
console.log({a, b, c}) // {} - atvaizduoja kaip objekta tipo zodzius

//- sudedu turimus sk. (siuo atveju abc), tada - minimalu esama - didziausia esama ir = vidurinis sk.
console.log('Vidurinis skaicius: ', a + b + c - Math.min(a, b, c) - Math.max(a, b, c))