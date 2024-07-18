import {Telegraf} from 'telegraf'
import fetch from 'node-fetch'
import { message } from 'telegraf/filters'
const bot = new Telegraf(process.env.TELEGRAM_TOKEN)
import 'dotenv/config'
//Cabeceras para envio de mensaje 
const reqPost = {
    method: 'POST',
    cache: 'no-cache',
    headers: {
    'Content-Type': 'application/json'
    },
    body: '' 

}

//Inicioo
const BotTelegram= async()=>{
    bot.start((ctx)=>{
        console.log(ctx)
        ctx.reply(`Hola, estoy despertando ${ctx.botInfo.username}`)
    })
//prueba de consulta.BD
    bot.hears('Barberos',async ctx=>{
        let data = await fetch('http://localhost:3028/api/barber')
        .then(resp=>
            resp.ok? resp.json() :ctx.reply('Error, no veo Barberos por aqui')
        ).catch(error=>{
            return {message: 'Error al consultar Bd' + error}
        })
        console.log(data)
        data=data.map(data=>(ctx.reply(data.nombre+'\n'+data.phone+'\n')))
    
    })

    //lanza el BOT
    try {
        const newBot= await bot.launch()  
        console.log(newBot)
    } catch (error) {
        return {message: error}
    }
}

export {BotTelegram}