// 1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:

// a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
let arreglo = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];
for (let index = 0; index < arreglo.length; index++) {
   for (let ar = 0; ar < arreglo[index].length; ar++) {
      
    console.log(arreglo[index][ar]);
   }
}

// b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach

let arregloBidimensional = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];
arregloBidimensional.forEach(i => {
   i.forEach(j => {
      console.log(j);
   })
})


