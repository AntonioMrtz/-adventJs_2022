function wrapping(gifts) {

    function wrap_gift(gift){

        let wrapped_gift=""

        for(let i=0;i<gift.length+2;i++){

            wrapped_gift+="*"
        }

        wrapped_gift+="\n"+"*"+gift+"*"+"\n"

        for(let i=0;i<gift.length+2;i++){

            wrapped_gift+="*"
        }

        return wrapped_gift

    }

    let wrapped_gifts=[];

    for(let gitft of gifts){


        wrapped_gifts.push(wrap_gift(gitft))
    }

  return wrapped_gifts
}


const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */