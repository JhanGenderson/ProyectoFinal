import React from "react";
import Ubicacion from "../Assets/Img/Ubicacion.jpg"

export default function Mapa() {
  return (
    <div className="card mb-3 border-success">
        <div className="row g-0">
          <div className="col-md-4">
        <img src={Ubicacion} style={{height:300, width:430}}/> 
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold text-center mt-1">Sazon y Canela</h2>
              <p className="card-text fw-bold mt-5 text-center">
              La atención en el establecimiento con capacidad limitada al 40%, Servicio de Delivery y Recojo en el Local. Cumplimos con todos los protocolos de bioseguridad.
              </p>
              <p className="card-text fw-bold text-center mt-5">
              Av. Las Palmeras 5200 - Los Olivos
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
