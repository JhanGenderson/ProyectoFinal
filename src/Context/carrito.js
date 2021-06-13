import { useState, createContext } from "react";

export const CarritoContext = createContext();

const CarritoContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const anadirPlato = (plato) => {
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id === plato.id) {
        let platoExistente = {
          ...carrito[i],
          cantidad: carrito[i].cantidad + 1,
        }
        let carritoTmp= [...carrito]
            carritoTmp.splice(i,1)
            carritoTmp.push(platoExistente)
            setCarrito([...carritoTmp])
            return
      }
    }

    setCarrito([...carrito, {...plato, cantidad:1}]);
  };
  return (
    <CarritoContext.Provider
      value={{
        carrito,
        anadirPlato,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
