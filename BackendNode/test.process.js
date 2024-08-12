process.on('test', (msg)=>{
    const time = new Date()
    
    console.log('Proceso iniciado')
    console.log('Recibo ',msg)
    console.log(time.toLocaleTimeString())
    setInterval(()=>{
        console.log('Proceso iniciado')
        console.log('Recibo ',msg)
        console.log(time.toLocaleTimeString())
        process.send(time.toLocaleTimeString())
    },5000)

})

setInterval(()=>{
    const time = new Date()
    console.log('Proceso iniciado')
    console.log(time.toLocaleTimeString())
    process.on('test',msg=>console.log(msg))
    process.send(time.toLocaleTimeString())
    
    
},5000)
