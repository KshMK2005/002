function obtenerUnicos(arr) {
    return [...new Set(arr)];
}

let numeros = [1, 2, 3, 2, 4, 5, 5, 6];
let unicos = obtenerUnicos(numeros);
console.log(unicos); 
