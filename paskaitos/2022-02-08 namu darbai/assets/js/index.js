function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min) 
    }


// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

// 2. Naudodamiesi 1 uždavinio masyvu:

// a)Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
// b)Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
// c)Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
// d)Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
// e)Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
// f)Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių
// g)Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;



//------------------ Uzduotis 1, 2a,b

 let masyvas = []
 let kiekis = 0
 for(let i = 0; i < 30; i++ ) {
     masyvas.push(randomSkaicius(5, 25))
     if(masyvas[i] > 10) {
        kiekis++
    } 
 }
console.log(masyvas)
console.log('Daugiau uz 10 reiksmiu kiekis: ', kiekis)
console.log('Didziausia reiksme: ', Math.max(...masyvas))
console.log('Didziausias indeksas: ', masyvas.indexOf(Math.max(...masyvas)))

//-------------------- Uzduotis 2c

let sum = 0 
for(let i = 0; i < masyvas.length; i++) {
    if(masyvas[i] % 2 === 0) {
        sum += masyvas[i]
    }
}
console.log('Lyginiu reiksmiu suma: ', sum)

//-------------------- Uzduotis 2d

for(let i = 0; i < masyvas.length; i++) {
    if(i != masyvas.length -1) 
        masyvas[i] -= masyvas[i+1]
}
console.log(masyvas)

//---------------------- Uzduotis 2e

let z = []

for(let i = 0; i < 10; i++ ) {
    masyvas.push(randomSkaicius(5, 25))
    z.push(randomSkaicius(5, 25))
}
console.log('Masyvo papildymas 10 elementu: ', masyvas)

//------------------------ Uzduotis 2f

let even = []
let odd = []

masyvas.forEach(function(reiksme) {
    if(reiksme % 2 === 0) {
        even.push(reiksme)
    }else {
        odd.push(reiksme)
    }    
}) 
console.log('Nelyginiai sk. is masyvo: ', odd)
console.log('Lyginiai sk. is masyvo: ', even)

//------------------------- Uzduotis 2g

masyvas.forEach(function(reiksme, indeksas) {
        if(reiksme > 15) {
        masyvas[indeksas] = 0
        }
})
console.log('Nuline reiksme kurie didesni uz 15: ', masyvas)
