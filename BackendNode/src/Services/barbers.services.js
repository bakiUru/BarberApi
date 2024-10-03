import barberRepository from '../Models/Repository/barber.repository.js'

const getBarber = async () =>{
    return await barberRepository.getBarber()
}

const getBarberByID = async (id) =>{
    return await barberRepository.getBarberByID(id)
}

const getBarberByPhone = async (phone) =>{
    return await barberRepository.getBarberByPhone(phone)
}

const addBarber = async (data)=>{
    return await barberRepository.addBarber(data)
}

const delBarber = async (id)=>{
    return await barberRepository.delBarber(id)
}

const updBarber = async (id) =>{
    return await barberRepository.updateBarber(id)
}

export default {
    getBarber,
    getBarberByID,
    getBarberByPhone,
    addBarber,
    delBarber,
    updBarber
}
