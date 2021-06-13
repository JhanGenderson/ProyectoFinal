import { useState, useEffect} from "react";
import { obtenerCategoria } from "../Services/categoriaService";
import GroupCategorias from "../Components/GroupCategorias";
import Headers from '../Components/Headers'
import Mapa from '../Components/Mapa'


export default function InicioView() {
  const [categoria, setCategoria] = useState([]);
  
  
  const getCategoria = async () => {
    let categoriaObtenida = await obtenerCategoria();
    setCategoria(categoriaObtenida);
  };
  useEffect(() => {
    getCategoria();
  }, []);

  return (
    <div className="container">
      <Headers/>
      <GroupCategorias categoria={categoria} />
         <Mapa/>
    </div>
  );
}
