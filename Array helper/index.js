// Udfyld funktionen i forEach-metoden således at alle navne i names konverteret til lowercase, undtagen
// ’HenriK’ og ’pER’ der skal konverteres til uppercase

/*
let names = ['Henrik', 'JAMshid', 'AndERS', 'EBBe', 'pER', 'MicHAel', 'PETEr'];
names.forEach((name, index, array) => {
    if (name.toLowerCase() === 'henrik' || name.toLowerCase() === 'per') {
        array[index] = name.toUpperCase();
    } else {
        array[index] = name.toLowerCase();
    }
})
console.log(names);
*/

// Udfyld funktionen increaseOwnerTax(cars, fuel, taxPct), så den gennemløber et array af Car-objekter og
// hæver owner_tax med taxPct hvis bilens brændstoftype matcher fuel

/*
let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550},
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '302i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '302i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '302i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0},
]

var increaseOwnerTax = (cars, fuel, taxPct) => {
    cars.forEach(car => {if (car.fuel === fuel) car.owner_tax *= (taxPct / 100)+1;})
    //cars.every(car => {if (car.fuel === fuel) car.owner_tax *= (taxPct / 100)+1;})
};

increaseOwnerTax(cars, 'diesel', 50)
increaseOwnerTax(cars, 'hybrid', 5)
console.log(cars)
*/

/* 
// Givet følgende array: cars , af car objekter:
let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550},
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '302i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '302i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '302i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0},
]

// a) Benyt map-metoden til at mappe arrayet cars til et array: carModels der indeholder alle
// modellerne:
// ["Passat", "Passat", "Passat", "320i", "320i", "320i", "S"]

const a = cars.map((c) => c.model)
console.log(a)

// b) Benyt map-metoden til at mappe arrayet cars til et array: carBrands der indeholder objekter
// med key: ’Mærke’ og value: brand:
// {"Mærke ": "VW"}...

const b = cars.map( (c) => {return {'Mærke ': c.brand}} )
console.log(b)
*/

/*
// Givet følgende string drivers, der indeholder et array af JS-objekter i json-format:
// Data, fra: http://ergast.com/api/f1/2018/drivers.json?callback=drivers
var drivers = `[
    {
    "driverId": "grosjean",
    "permanentNumber": "8",
    "code": "GRO",
    "url": "http://en.wikipedia.org/wiki/Romain_Grosjean",
    "givenName": "Romain",
    "familyName": "Grosjean",
    "dateOfBirth": "1986-04-17",
    "nationality": "French"
    },
    {
    "driverId": "hamilton",
    "permanentNumber": "44",
    "code": "HAM",
    "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    "givenName": "Lewis",
    "familyName": "Hamilton",
    "dateOfBirth": "1985-01-07",
    "nationality": "British"
    },
    {
    "driverId": "hulkenberg",
    "permanentNumber": "27",
    "code": "HUL",
    "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
    "givenName": "Nico",
    "familyName": "Hülkenberg",
    "dateOfBirth": "1987-08-19",
    "nationality": "German"
    },
    {
    "driverId": "kevin_magnussen",
    "permanentNumber": "20",
    "code": "MAG",
    "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
    "givenName": "Kevin",
    "familyName": "Magnussen",
    "dateOfBirth": "1992-10-05",
    "nationality": "Danish"
    }
]`;

// a) Konverter tekst-strengen: drivers til et array: f1Drivers af JS-objekter.
console.log(JSON.parse(JSON.stringify(drivers)))

// b) Map arrayet: f1Drivers til et nyt array: myDrivers med objekter af følgende struktur:
const arr = JSON.parse(drivers)
const data = arr.map( (d) => {return {'Kode ': d.code, 'Fornavn ': d.givenName, 'Efternavn' : d.familyName}})
console.log(data)

// {Kode : ”MAG”, Fornavn : ”Kevin”, Efternavn : ”Magnussen}
*/

// Opgave (filter - 1 )
// Givet arrayet cars fra ovenstående eksempel. Find vha. filter-metoden, alle de hybrid biler der har en
// grøn afgift under 200.
/*
let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550},
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '302i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '302i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '302i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0},
];
console.log(cars.filter((c) => { return c.owner_tax < 200}));
*/


// Opgave (filter - 2 )
/*
let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550},
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '302i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '302i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '302i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0},
];

// a) Lav en funktion fuelCriterium der har car og fuel som parameter og som returnere true hvis værdien af
// car.fuel er det samme som værdien af fuel, ellers returneres false.
function fuelCriterium (car, fuel) {
    if (car.fuel === fuel) return true; return false;
};


// b) Givet arrayed cars fra ovenstående opgave. Find vha. filter-metoden og ovenstående prædikat-
// funktion fuelCriterium, alle de biler der har ”gasoline” som fuel.
console.log(cars.filter((c) => fuelCriterium(c, 'gasoline')));
*/

// Opgave (reduce – 1 )
// Benyt reduce til at finde summen af alle distance og gem resultatet i variablen totalDistance:
/*
var trips = [{distance : 48}, {distance : 12}, {distance : 6}];
var totalDistance = trips.reduce((sum, t) => sum += t.distance , 0);
console.log(totalDistance);
// (Forventet resultat: 66)
*/

// Opgave (reduce – 2 )
// Givet følgende kodestump, - udfyld callback-funktionen, så den giver det forventede resultat.
// (Hint: husk at returnere accumulate objektet acc)
/*
var desk = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desk.reduce((acc, desk) => {
    if (desk.type === 'sitting') acc.sitting++; acc.standing++;
    return acc;
}, { sitting: 0, standing: 0 });
console.log(deskTypes);
*/

// Opgave (reduce/find – 3 – lidt svær )
// Lav en funktion unique der kan fjerne alle dubletter fra et array.
// fx givet arrayet [1, 1, 2, 3, 4, 4] vil funktionen returnere [1,2,3,4]
/*
var numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
    return array.reduce((arr, n) => {
        if (!arr.find((num) => num === n)) {
            arr.push(n);
        }
        return arr;
    }, [])
}
console.log(unique(numbers));
*/