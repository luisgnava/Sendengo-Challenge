import React, * as react from 'react';


let userName = 'Jose Dominguez';

let vehicleType = 'Camioneta de 3.5 toneladas';


export default function Success() {
        return (
            <h1>
                Gracias {userName} por registrarte a Sendengo. En
    breve recibiras un correo con cargas disponibles para tu {vehicleType}.
        </h1>
        )
};

