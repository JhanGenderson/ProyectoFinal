import { useContext } from "react";
import { CarritoContext } from "../Context/carrito";

export default function CarritoView() {
  let { carrito } = useContext(CarritoContext);
  return (
    <div className="container">
      <div className="my-4 text-center">
        <h1 className="fw-bold">
          <i className="fas fa-shopping-cart me-2"></i>
          Carrito de Compras
        </h1>
      </div>
      <table className="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total a Pagar</th>
            </tr>
        </thead>
        <tbody>
            {carrito.map((plat, i) => (
        <tr key={i}>
            <td>{plat.nombrePlato}</td>
            <td>S/. {plat.precioPlato}</td>
            <td>{plat.cantidad}</td>
            <td>S/. {plat.precioPlato*plat.cantidad}</td>
        </tr>
      ))}
        </tbody>
      </table>
      
    </div>
  );
}
