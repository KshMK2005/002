let numeros = []

for(let i= 1; i<=5; i++){
    let cuenta = prompt("Teclea un numero")
    numeros.push(cuenta)

}
console.log("el mayor de los numeros tecleados es"+Math.max(...numeros))




