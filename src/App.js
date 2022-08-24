
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from 'react-bootstrap';

function App() {
  return (
    <div className='Design'>
      <div className='title'>
     <h1> Design D'intérieur</h1>
      </div>
      <div className='Adress'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>

    
    <div className="App">
   
        <img src="https://nobili-design.com/storage/posts/280/900_Living_Room_Design_Concept.jpg" alt="img"/>
      <h1>Concept de design d'intérieur maison de luxe moderne</h1>
       <Button>Voir le projet</Button>
    
    </div>
 
</div>
);
}
export default App;
