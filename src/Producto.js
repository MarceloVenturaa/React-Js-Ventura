import React from "react";
import "./App.css"

class Producto extends React.Component {
    render() {

        return (
            <>
              <div className="titulo" >{this.props.artículo}<span>{this.props.sexo}</span> </div>
              <div>Precio: <span>{this.props.precio}</span></div>
            </>
            )

    }

  }
  
export default Producto;