import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const ToggleSection = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        className="d-block mx-auto my-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Nascondi sezione" : "Mostra sezione"}
      </Button>

      {show && (
        <Card className="d-block mx-auto" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1714508862788-44e45c4315d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="trevi's fountain"
          />
          <Card.Body>
            <Card.Title>Fontana di Trevi</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default ToggleSection;
