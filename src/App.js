import { useState } from "react";
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

function App() {
  const [value, setValue] = useState("");
  const [encryptedValue, setEncryptedValue] = useState("");
  const [DencryptedValue, setDEncryptedValue] = useState("");
  const [valuetext, setvaluetext] = useState("");

  const onEncrypt = () => {
    const newEncryptedValue = value
      .replace(/[e]/gi, "imes")
      .replace(/[i]/gi, "ai")
      .replace(/[o]/gi, "ober")
      .replace(/[a]/gi, "enter")
      .replace(/[u]/gi, "ufat");
    setvaluetext(newEncryptedValue);
    setValue = "";
  };
  const onDEncrypt = () => {
    const newDEncryptedValue = value
      .replace(/[imes]/gi, "e")
      .replace(/[ai]/gi, "i")
      .replace(/[ober]/gi, "o")
      .replace(/[enter]/gi, "a")
      .replace(/[ufat]/gi, "u");
    setvaluetext(newDEncryptedValue);
    setValue = "";
  };
  const Oncopy = () => {
    var texto = value;
    texto.select();
    document.execCommand("copy");
    console.log("Texto copiado");
  };

  const onValueChange = ({ target }) => {
    setValue(target.value);
  };
  //JSON.stringify({ encryptedValue, DencryptedValue })}

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
              <Button variant="secondary" onClick={onDEncrypt}>
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
                  onChange={onValueChange}
                  readOnly
                  value={valuetext}
                />{" "}
              </Form>
              <br />
              <Button variant="success" onClick={Oncopy}>
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
