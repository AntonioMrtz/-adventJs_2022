
function countHours(year, holidays) {

    let extra_hours=0;

    for(let holiday of holidays ){

        let day=holiday.split("/")[1].replace("0","")
        let month=holiday.split("/")[0].replace("0","")
        
        let date=new Date(year,month-1,day)

        if(![0,6].includes(date.getDay()))
            extra_hours+=2;

    }

    console.log(extra_hours)
    return extra_hours

}



const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año

countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])

