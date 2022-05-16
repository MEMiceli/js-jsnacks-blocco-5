// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


const product = [
    {
        family:"esenberg",
        weight:100,
        length:10,
    },
    {
        family:"marsupial",
        weight:120,
        length:12,
    },
    {
        family:"bisest",
        weight:110,
        length:13,
    },
    {
        family:"pork",
        weight:110,
        length:11,
    },
    {
        family:"rocc",
        weight:120,
        length:12,
    },
    {
        family:"homeless",
        weight:160,
        length:"11",
    },
    {
        family:"bolt",
        weight:100,
        length:12,
    },
    {
        family:"optimusprime",
        weight:140,
        length:14,
    },
    {
        family:"porkbig",
        weight:110,
        length:11,
    },
    {
        family:"roccsiff",
        weight:120,
        length:12,
    },
];


// sommare il peso dei 10 elementi oggetti

let total = 0;

for (let i = 0; i < product.length; i++) {
    total = total + product[i].weight;
}
console.log('peso totale: ${total}gr');
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let grandi = []
let piccole = []
for (let i = 0; i < product.length; i++) {
    if (length > 15){
        grandi.push[i]
    } else {
        piccole.push[i]
    }

}
console.log(grandi,piccole)


