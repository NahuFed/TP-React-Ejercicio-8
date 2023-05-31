import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from './components/Formulario';
import { Container } from 'react-bootstrap';
function App() {


  return (
    <>
    <Container className='mt-5'>
      <Formulario></Formulario>
    </Container>
    </>
  )
}

export default App
