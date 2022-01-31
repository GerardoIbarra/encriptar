import { useState, useRef } from "react";
import {
  Button,
  Container,
  Row,
  Card,
  Col,
  Navbar,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const encryptedValues = {
  a: 'ai',
  A: 'Ai',
  e: 'enter',
  E: 'Enter',
  i: 'imes',
  I: 'Imes',
  o: 'ober',
  O: 'Ober',
  u: 'ufat',
  U: 'Ufat'
}

const decryptedValues = {
  ai: 'a',
  Ai: 'A',
  enter: 'e',
  Enter: 'E',
  imes: 'i',
  Imes: 'I',
  ober: 'o',
  Ober: 'O',
  ufat: 'u',
  Ufat: 'U'
}

function App() {
  const [value, setValue] = useState("");
  const [isCopied, setCopyState] = useState(false);
  const [outputText, setOutputText] = useState("");
  const inputRef = useRef();

  const onEncrypt = () => {
    // To avoid multiple conditional statements. Use an object and match by key.
    // replace() allows you to pass a function for complex string replacing. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    const newEncryptedValue = value.replace(/[aeiou]/gi, (match) => encryptedValues[match]);
    setOutputText(newEncryptedValue);
  };
  const onDecrypt = () => {
    const newDecryptedValue = value.replace(/(ai|enter|imes|ober|ufat)/gi, (match) => decryptedValues[match])
    setOutputText(newDecryptedValue);
  };
  const onCopy = ({ target }) => {
    inputRef.current.select();
    document.execCommand('copy');
    target.focus();
    setCopyState(true)

    setTimeout(() => {
      setCopyState(false);
    }, 3000)
  };

  const onValueChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <Container>
      <Navbar>
        <Navbar.Brand href="#home">Encripta tu informacion</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Use <Link /> instead from react-router-dom: https://v5.reactrouter.com/web/guides/quick-start*/}
            Signed in as: <a href="#login">Luis Ibarra</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Row>
        <Col>
          <Card>
            <Card.Header>Ingresa aqui la informacion</Card.Header>
            <Card.Body>
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Enter Text"
                  id="texto"
                  onChange={onValueChange}
                  value={value}
                />
              </Form>
              <br />
              <Button variant="primary" onClick={onEncrypt}>
                Encriptar
              </Button>{" "}
              <Button variant="secondary" onClick={onDecrypt}>
                Desencriptar
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>Informacion encriptada</Card.Header>
            <Card.Body>
              <Form>
                <Form.Control
                  type="text"
                  id="Textoread"
                  placeholder="Readonly input here..."
                  readOnly
                  value={outputText}
                  ref={inputRef}
                  isValid={isCopied}
                />{" "}
                {isCopied && <Form.Control.Feedback>Mensaje copiado</Form.Control.Feedback>}
              </Form>
              <br />
              <Button variant="success" onClick={onCopy}>
                Copy
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
