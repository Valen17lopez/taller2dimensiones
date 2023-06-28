// 2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"], 
// [true, 1000, “@”, "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]

//a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
let arreglo =  [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ];    
for (let index = 0; index < arreglo.length; index++) {
   for (let x = 0; x < arreglo[index].length; x++) {
       
    console.log(arreglo[index][x]);
   }   
}

// b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach

let arre= [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ];
arre.forEach(index =>{
    index.forEach(x =>{
        console.log(x);
    })
})
    



