import {useState, useEffect,Fragment} from 'react'
import {useParams} from 'react-router-dom'
import {obtenerPlato} from '../Services/platoService'
import GroupPlatos from '../Components/GroupPlatos'
import {getCategoriaId} from '../Services/categoriaService'
import Cargando from "../Components/Cargando";

export default function PlatosEntradaView() {
    const [plato, setPlato] = useState([])
    const [catego,setCatego] = useState({})
    const [cargando, setCargando] = useState(true);
    let {id}= useParams()

    const getPlato = async()=>{
        try {
            let platosObtenidos = await obtenerPlato()
            setPlato(platosObtenidos)
            setCargando(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    const obtenerCatego = async()=>{
        try {
            let getCategoId= await getCategoriaId(id)
            setCatego({...getCategoId})
            setCargando(false);
        } catch (error) {
            console.log(error) 
        }
    }
    useEffect(()=>{
        getPlato()
        obtenerCatego()
    },[])
    return (
        <Fragment>
            {cargando?(
                <Cargando/>
            ):(
               <GroupPlatos 
               plato={plato} 
               categoriaPlato={catego.nombreCategoria} 
               id_categoriaPlato={catego.id} 
               mostrarFiltro={true}
               setPlato={setPlato}/> 
            )}
            
        </Fragment>
       
    )
}
