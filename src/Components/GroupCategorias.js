import React from "react";
import {Link} from 'react-router-dom'

export default function GroupCategorias({ categoria }) {
  return (
    <div className="container">
       
      <div className="text-center mt-1">
        <h1>Las mas buscadas</h1>
      </div>
      <div className="row d-flex justify-content-around mb-3">
        {categoria.map((cat, i) => (
          <div className="col-12 col-md-6 col-sm-10 mb-3 col-lg-3" key={i}>
            <Link style={{textDecoration:'none',color:'black'}} className="card border-success" to={`/categoriaplato/${cat.id}`}>
              <img className="card-img-top mt-1" 
              style={{width:'190px', height:'190px',padding:'50px',alignSelf:'center',border:'1px solid green', borderRadius:'60px'}} 
              src={cat.fotoCategoria} alt=""/>
              <div className="card-body text-center">
                <h6 className="fw-bold">{cat.nombreCategoria}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    
    </div>
  );
}
