import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import TituloFormulario from "./TituloFormulario";

const Formulario = () => {
  return (
    <div>
      <Form>
        <TituloFormulario></TituloFormulario>
        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre</InputGroup.Text>
          <Form.Control
            placeholder="Nombre"
            aria-label="Nombre"
            aria-describedby="nombre"
            required
            
          />
          <InputGroup.Text>Apellido</InputGroup.Text>
          <Form.Control
            placeholder="Apellido"
            aria-label="Apellido"
            aria-describedby="apellido"
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="dni">DNI</InputGroup.Text>
          <Form.Control
            placeholder="Dni"
            aria-label="Dni"
            aria-describedby="dni"
            type="number"
            required
            min={1}          
            maxLength={8}
            onInput={(e)=> { 
                if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength)
            } }             
            

          />
          <InputGroup.Text id="email">Email</InputGroup.Text>
          <Form.Control type="email" placeholder="name@example.com" required />
        </InputGroup>
        <div className="d-flex justify-content-end">
        <Button type="submit">Enviar</Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
