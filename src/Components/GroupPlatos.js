import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "@material-ui/core/Slider";

export default function GroupPlatos({
  plato,
  categoriaPlato,
  id_categoriaPlato,
  mostrarFiltro,
  setPlato,
}) {
  const [toggleFiltro, setToggleFiltro] = useState(false);
  const [filtroPrecio, setFiltroPrecio] = useState([1, 150]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [platoOriginal] = useState(plato);

  const manejarFiltro = (evento, precio) => {
    setFiltroPrecio(precio);
  };

  const textoPrecio = (valor) => {
    return `S/ ${valor}`;
  };

  useEffect(() => {
    let platosFiltrados = platoOriginal.filter((plat) => {
      return (
        plat.precioPlato >= filtroPrecio[0] && plat.precioPlato <= filtroPrecio[1] && plat.nombrePlato.toLowerCase().includes(filtroNombre.toLowerCase())
      );
    });
    setPlato(platosFiltrados);
  }, [filtroPrecio,filtroNombre]);

  return (
    <div className="container">
      <div>
        <h2 className="my-3 fw-bold text-center">{categoriaPlato}</h2>
      </div>

      {mostrarFiltro ? (
        <div>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => {
              setToggleFiltro(!toggleFiltro);
            }}
          >
            <i className="fas fa-funnel-dollar me-1"></i> Filtros
          </button>
          {toggleFiltro ? (
            <div className="row p-3">
              <div className="col-12 col-lg-6">
                <label className="form-label">Ajustar Precio</label>
                <Slider
                  value={filtroPrecio}
                  min={1}
                  max={150}
                  onChange={manejarFiltro}
                  getAriaValueText={textoPrecio}
                  valueLabelDisplay="auto"
                />
              </div>
              <div className="col-12 col-lg-6">
                <label className="form-label">Buscar por nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej. Gorro"
                  value={filtroNombre}
                  onChange={(e) => {
                    setFiltroNombre(e.target.value);
                  }}
                />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="row mt-3">
        {plato
          .filter((plat) => {
            return plat.id_categoriaPlato == id_categoriaPlato;
          })
          .slice(0, 8)
          .map((plat, i) => (
            <div
              className="col-10 col-lg-3 col-md-6 col-sm-6 align-self-center"
              key={i}
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="card mb-4 border-danger"
                to={`/detalle/${plat.id}`}
              >
                <img className="card-img-top" src={plat.fotoPlato} alt="" />
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
