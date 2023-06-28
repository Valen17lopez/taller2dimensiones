// 3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]:

// a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o
// forEach.

let arreglo=[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
for (let index = 0; index < arreglo.length; index++) {
    for (let n = 0; n < arreglo[index].length; n++) {
        if (arreglo[index][n]% 2 != 0) {
            console.log(arreglo[index][n]);
        }   
    }
}

// b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
// para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach.

let arreglo1=[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
suma=0
for (let i = 0; i < arreglo1.length; i++) {
    for (let n = 0; n < arreglo1[i].length; n++) {
      suma+=arreglo1[i][n]
        }   
    }
    console.log(suma);