function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min) 
}
    //------ 10 uzduotis

    // Sukurkite keturis kintamuosius ir ​randomSkaicius()​ funkcija sugeneruokite jiems 
    // reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
    // (sprendimui masyvo nenaudoti).

let a = randomSkaicius(0, 2);
let b = randomSkaicius(0, 2);
let c = randomSkaicius(0, 2);
let d = randomSkaicius(0, 2);

console.log('Random skaiciai: ', {a, b, c, d})

let kiekis0 = 0;
let kiekis1 = 0;
let kiekis2 = 0;

function skaiciuokle(x) {
    if(x == 0) {
        kiekis0++
    }
    else if(x == 1) {
        kiekis1++
    }
    else if(x == 2) {
        kiekis2++
    }
}
skaiciuokle(a)
skaiciuokle(b)
skaiciuokle(c)
skaiciuokle(d)
console.log(`Nuliai: ${kiekis0}`)
console.log(`Vienetai: ${kiekis1}`)
console.log(`Dvejetai: ${kiekis2}`)

    //------- 11 uzduotis

    // Naudokite funkcija randomSkaicius()​.
    // Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. 
    // Pvz skaičius 3- rezultatas: <h3>3</h3>

let skaicius = randomSkaicius(1, 6)
console.log({skaicius})
document.getElementById('number').innerHTML = `<h${skaicius}>${skaicius}</h${skaicius}>`

    //------- 12 uzduotis

    // Naudokite funkcija randomSkaicius()​. Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100.
    // Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, 
    // kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. 
    // Rezultatus apvalinkite iki sveiko skaičiaus.


let sk1 = randomSkaicius(0, 100)
let sk2 = randomSkaicius(0, 100)
let sk3 = randomSkaicius(0, 100)
console.log('Random skaiciai: ', sk1, sk2, sk3)

let aritmetinisVidurkis = (sk1 + sk2 + sk3)/3
console.log('Aritmetinis vidurkis: ', Math.round(aritmetinisVidurkis))

let kiekis = 3
let suma = 0 
function tinkamas(x) {
    if(x < 10 || x > 90) {
        kiekis--
    }else {
        suma += x
    }
}
tinkamas(sk1)
tinkamas(sk2)
tinkamas(sk3)

if(kiekis == 0) {
    console.log('Visi skaiciai yra netinkami')
}else {
    let vidurkis = suma/kiekis
    console.log('Aritmetinis vidurkis atmetus netinkamas vertes: ', Math.round(vidurkis))
}

    //------- 13 uzduotis

    // Sukurkite ivykio užfiksavimą (addEventListener), įvykio pavadinimas: "keydown",
    // jis aktyvuojasi kai klaviatūroje yra paspaudžiamas bet kuris klavišas.
    // Šį įvykį priskirkite prie input laukelio ir pasiimkite laukelio reikšmę bei ją atspausdinkite puslapyje.
    // Submit mygtuko nenaudokite. Laukelyje kaskart įvedamas simbolis turi būti papildomas puslapyje.

document.getElementById('input').addEventListener('keydown', function() {
    let rezultatas = document.getElementById('input').value
    document.getElementById('tekstas').innerHTML = `${rezultatas}`
})