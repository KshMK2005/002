function invertirArreglo(arr) {
    return arr.reduce((acumulador, valorActual) => [valorActual, ...acumulador], []);
}

let arreglo = [1, 2, 3, 4, 5];
let arregloInvertido = invertirArreglo(arreglo);
console.log(arregloInvertido); // [5, 4, 3, 2, 1]
