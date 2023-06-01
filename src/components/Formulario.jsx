import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import TituloFormulario from "./TituloFormulario";
import { useForm } from "react-hook-form";
import { dniValidator } from "./validators";

const Formulario = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const incluirTelefono = watch("incluirTelefono");
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TituloFormulario></TituloFormulario>

        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre</InputGroup.Text>
          <Form.Control
            placeholder="Nombre"
            aria-label="Nombre"
            aria-describedby="nombre"
            {...register("nombre", {
              required: true,
              maxLength: 50,
            })}
          />

          <InputGroup.Text>Apellido</InputGroup.Text>
          <Form.Control
            placeholder="Apellido"
            aria-label="Apellido"
            aria-describedby="apellido"
            required
            {...register("apellido")}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="dni">DNI</InputGroup.Text>
          <Form.Control
            placeholder="Dni"
            aria-label="Dni"
            aria-describedby="dni"
            type="number"
            min={1}
            maxLength={8}
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
            {...register("dni", {
              validate: dniValidator,
            })}
          />
          <InputGroup.Text id="email">Email</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            required
            {...register("email", {
              pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
            })}
          />
        </InputGroup>
        {incluirTelefono && (
          <InputGroup>
            <InputGroup.Text id="telefono">Telefono</InputGroup.Text>
            <Form.Control type="tel" placeholder="381 1 123 456"{...register("telefono")} />
          </InputGroup>
        )}
        <div>
          <label>Incluir telefono? </label>
          <input type="checkbox" {...register("incluirTelefono")} />
        </div>

        <div className="d-flex justify-content-end">
          <Button type="submit">Enviar</Button>
        </div>

        {errors.nombre?.type === "required" && (
          <p className="error">El campo nombre es requerido</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="error">El formato del email es incorrecto</p>
        )}
        {errors.dni && (
          <p className="error">El dni debe estar entre 1 y 80.000.000</p>
        )}
      </Form>
    </div>
  );
};

export default Formulario;
