import React from "react";
import {Link} from 'react-router-dom'

export default function GroupPlatos({
  plato,
  categoriaPlato,
  id_categoriaPlato,
}) {
  return (
    <div className="container">
      <div>
        <h2 className="my-3 fw-bold text-center">{categoriaPlato}</h2>
      </div>
      <div className="row">
        {plato
          .filter((plat) => {
            return plat.id_categoriaPlato == id_categoriaPlato})
          .slice(0,8)
          .map((plat, i) => (
            <div className="col-6 col-lg-3" key={i}>
              <Link style={{textDecoration:'none', color:'black'}} className="card mb-4 border-danger" to={`/detalle/${plat.id}`}>
                <img className="card-img-top" src={plat.fotoPlato} />
                <div className="card-body ">
                  <h6 className="card-title fw-bold">
                    Plato: {plat.nombrePlato}
                  </h6>
                  <h6 className="card-title fw-bold">Precio:</h6>
                  <span>S/{plat.precioPlato}</span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
