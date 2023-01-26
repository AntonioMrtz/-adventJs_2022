function fitsInOneBox(boxes) {

    // ordenar cajas

    boxes= boxes.sort(  (a,b) => {


        return (a.l+a.w+a.h) - (b.l+b.w+b.h);

    } )

    // comprobar si caben en la siguiente menos la ultima

    for(let i=0;i<boxes.length-1;i++){

        if (boxes[i].l>=boxes[i+1].l || boxes[i].w>=boxes[i+1].w || boxes[i].h>=boxes[i+1].h)
            return false
    }



    return true
}


console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]))

// fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 2, w: 2, h: 2 }
// ]) // true

// let boxes = [
//     { l: 1, w: 1, h: 1 },
//     { l: 2, w: 2, h: 2 },
//     { l: 3, w: 1, h: 3 }
// ]

// fitsInOneBox(boxes) // false

// boxes = [
//     { l: 1, w: 1, h: 1 },
//     { l: 3, w: 3, h: 3 },
//     { l: 2, w: 2, h: 2 }
// ]

// fitsInOneBox(boxes) // true