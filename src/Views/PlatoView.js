import { useState, useEffect, Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { obtenerPlatosById } from "../Services/platoService";
import Cargando from "../Components/Cargando";
import {CarritoContext} from '../Context/carrito'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

export default function PlatoView() {
  const [plato, setPlato] = useState({});
  const [cargando, setCargando] = useState(true);

  let { id } = useParams();
  let {anadirPlato} = useContext(CarritoContext)
  let history = useHistory()

 const anadirPlatoACarrito= ()=>{
   anadirPlato({...plato})
   Swal.fire({
     icon:'success',
     title:'Plato Añadido',
     showConfirmButton:true,
     showDenyButton:true,
     confirmButtonText:'Seguir Comprando',
     denyButtonText:'Ir a Carrito'
   }).then((resultado)=>{
      if(resultado.isConfirmed){
        history.push('/')
      }else if(resultado.isDenied){
        history.push('/carrito')
      }
   })
 }


  const getPlato = async () => {
    try {
      let platoObtenido = await obtenerPlatosById(id);
      setPlato({...platoObtenido});
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlato()
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Cargando />
      ) : (
        <div>
          <div className="plato-detalle">
            <div className="container p-4 text-center">
              <h2 className="fw-bold">{plato.nombrePlato}</h2>
            </div>
          </div>
          <div className="container">
            <div className="row ">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  src={plato.fotoPlato}
                  alt={`Foto de ${plato.nombrePlato}`}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-4">
                <h5 className="fw-bold">Descripcion:</h5>
                <p>{plato.descripcionPlato}</p>
                <hr />
                <div className="py-3 d-flex justify-content-between align-items-center">
                  <span className="fw-bold">
                    Precio: S/. {plato.precioPlato}
                  </span>
                  <button className="btn btn-dark btn-lg" onClick={anadirPlatoACarrito}>
                    Añadir a Carrito
                  </button>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
