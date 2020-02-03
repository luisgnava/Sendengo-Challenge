import React, * as react from 'react';
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
                    <p style={styles}>Escoja la fecha de vencimiento de su licencia: </p>
                    <input style={styles} type="date" id="select-date" />
                </form>
            </div>
        );
    }
}

export default Formulario;