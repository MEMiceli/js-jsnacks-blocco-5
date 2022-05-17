// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.


const car = [
    {
        "marca": "fiat",
        "modello": "punto",
        "alimentazione": "benzina",
    },
    {
        "marca": "fiat",
        "modello": "barchetta",
        "alimentazione": "benzina",
    },
    {
        "marca": "ferrari",
        "modello": "enzo",
        "alimentazione": "elettrica",
    },
    {
        "marca": "rover",
        "modello": "range",
        "alimentazione": "diesel",
    },
    {
        "marca": "ford",
        "modello": "tiguan",
        "alimentazione": "diesel",
    },
    {
        "marca": "ford",
        "modello": "escort",
        "alimentazione": "benzina",
    },
    {
        "marca": "nissan",
        "modello": "jsSpecial",
        "alimentazione": "ibrida",
    },
    {
        "marca": "lamborghini",
        "modello": "Toretto",
        "alimentazione": "benzina",
    },
    {
        "marca": "rover",
        "modello": "sd1",
        "alimentazione": "diesel",
    },
    {
        "marca": "ford",
        "modello": "fiesta",
        "alimentazione": "diesel",
    },
];
const benzina = car.filter(elm => elm.alimentazione === "benzina");
const diesel = car.filter(elm => elm.alimentazione === "diesel");
const altro = car.filter(elm => elm.alimentazione !== "benzina" && elm.alimentazione !== "diesel");
console.log( benzina, diesel, altro);

// altro metodo con for each