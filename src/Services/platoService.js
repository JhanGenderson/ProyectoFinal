import axios from 'axios'

const URL = "https://60b2f448e0275c0017bfc898.mockapi.io/Productos";

const obtenerPlato = async()=>{
    try {
        let {data} = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

const obtenerPlatosById= async(id)=>{
    try {
        let {data} = await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

export {
    obtenerPlato, obtenerPlatosById
}