import React from "react";

class Nombre extends React.Component {
    render () {
        return (
            <>
            Soy {this.props.pnombre}
            </>
        );
    }
    
}

export default Nombre;