import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from './components/Formulario';
import { Container } from 'react-bootstrap';
function App() {


  return (
    <>
    <Container className='main mt-5'>
      <Formulario></Formulario>
    </Container>
    <footer className="bg-dark text-center text-light py-4">
        <p>&copy; Todos los derechos reservados </p>
      </footer>     
    </>
  )
}

export default App
