import { Button, Form, InputGroup } from "react-bootstrap";
import TituloFormulario from "./TituloFormulario";
import { useForm } from "react-hook-form";
import { dniValidator } from "./validators";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useState } from "react";



const Formulario = () => {
  
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const[arrayObjetos, setArrayObjetos]=useState([{}])

  const onSubmit = (data) => {
    const MySwal = withReactContent(Swal);

    if (Object.keys(errors).length > 0) {
      MySwal.fire("Mal ahi!", "Te faltaron llenar datos!", "error");
    } else {
      MySwal.fire("Bien ahi!", "Gracias por tus datos!", "success");
    }
    setArrayObjetos([...arrayObjetos,data])
    console.log(arrayObjetos)
  };


  const incluirTelefono = watch("incluirTelefono");
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit) }>
        
        <TituloFormulario></TituloFormulario>
        <div className="p-5 border border-2  border-top-0 border-black ">

        
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
            
            {...register("apellido",{
              required: true,
              maxLength: 50,
            })}
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
            
            {...register("email", {
              required: true,
              maxLength: 74,
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
        </div>
      </Form>
    </>
  );
};

export default Formulario;
