/*
horarios de trabajos establecidos por el ADM 
estos horarios definiran de manera automatica los horarios disponibles para la cita
*/
export const workOptions = {
    start: 8,
    end: 17,
    break: 2,
    workTimePerClient : 45
}

console.log(workOptions)
//
const hourGeneration = (workOptions) => {
    const listHour = []
    let minute = 0
    for (let i=workOptions.start; i<workOptions.end;)
    {
        ///first Start
        if (minute == 0 ) 
            listHour.push(`${i}:00`)
        if (minute >= 60)
            {
                console.log(minute)
                minute = minute - 60
                i+=1
                minute != 0?
                listHour.push(`${i}:${minute}`)
                :
                listHour.push(`${i}:00`)
            }
        else if (minute != 0)
                listHour.push(`${i}:${minute}`)
            
        minute+= workOptions.workTimePerClient
    }
    return listHour
}

console.log(hourGeneration(workOptions))