//console.log( `10` === 10 );

//let num1 = 32
//let num2 = 23

// const brinchison = prompt(`birinchison kiriting`)
// const ikkinchison = prompt(`ikkinchi son kiriting`)

// if (num1 < num2) {
//     console.log(`Gap yo'q to'g'ri ${num1}`);
// } else{
//   console.log(`Eshak miyya false ${num2} kichkina-ku ${num1} dan`)
// }


const son = (Math.round(Math.random() * 100))
alert(`Random son: ${son}`)

if (son % 3 == 0) {
    alert(`${son} soni fizz`)
} else {
    alert(`${son} soni fizz emas`)
}

if (son % 5 == 0) {
alert(`${son} buzz`)    
} else {
    alert (`${son} soni buzz emas`)
}