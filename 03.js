function distributeGifts(packOfGifts, reindeers) {
    
    let weight_reindeers=0;
    let weigth_gifts=0;

    for(let reindeer of reindeers){

        weight_reindeers+=(reindeer.length*2)
        
    }

    for(let gift of packOfGifts){


        weigth_gifts+=gift.length
        
    }

    
    return Math.floor(weight_reindeers/weigth_gifts)

}


const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers)) // 2