import React, * as react from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

let styles = {
    paddingTop: '3px',
    paddingRight: '3px',
    paddingBottom: '3px',
    paddingLeft: '3px',
    fontFamily: 'Roboto',
    fontSize: '18px',
    textAlign: 'middle',
};

let licenseType = {
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    E: "E",
    F: "F"
};

let vehicleType = {
    0: "Sin especificar",
    1: "Camioneta de 1.5 toneladas",
    2: "Camioneta de 3.5 toneladas",
    3: "Camioneta de 5.5 toneladas",
    4: "Rabon con caja seca",
    5: "Rabon con caja refrigerada",
    6: "Torton con caja seca",
    7: "Torton con caja refrigerada",
    9: "Trailer de 48 ft con caja seca",
    10: "Trailer de 48 ft con caja refrigerada",
    11: "Trailer de 53ft con caja seca",
    12: "Trailer de 53ft con caja refrigerada"
};

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <label style={styles}>
                    Nombre completo:
                    <input style={styles} type="text" onChange={this.handleChange} />
                </label>
                <label style={styles}>
                    Correo Electronico:
                    <input style={styles} type="text" onChange={this.handleChange} />
                </label>
                <form style={styles} onSubmit={this.handleSubmit} >
                    <label style={styles}>
                        Escoja su tipo de licencia:
                            <select style={styles} value={this.state.value} onChange={this.handleChange}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                    </label>
                    <p style={styles}>Escoja la fecha de vencimiento de su licencia:</p>
                    <input style={styles} type="date" id="select-date" />
                </form>
                <Link to='/submit'>
                <Button variant="contained" color="primary" onChange={this.handleSubmit}>
                    Submit
                </Button>
                </Link>
            </div>
        );
    }
}

export default Formulario;