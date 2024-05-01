import '../index.css';
import { Row, Col, Card } from "react-bootstrap";

function Result({ colors }) {
  // Helper function to create RGB color string
  const rgbColor = (r, g, b) => `rgb(${r},${g},${b})`;

  return (
    <Card style={{ width: 'auto', marginTop: '15px' }}>
      <div style={{ backgroundColor: colors.hex.value, height: '10px' }}></div>
      <Card.Body>
        <Card.Title>{colors.name.value}</Card.Title>
        <Card.Text>
          {colors.hex.value}
        </Card.Text>
        <Row>
          <Col>
            <div style={{ backgroundColor: rgbColor(colors.rgb.r, 0, 0), display: 'inline-block', margin: '0px 2px', height: '20px', width: '100%' }}></div>
          </Col>
          <Col>
            <div style={{ backgroundColor: rgbColor(0, colors.rgb.g, 0), display: 'inline-block', margin: '0px 2px', height: '20px', width: '100%' }}></div>
          </Col>
          <Col>
            <div style={{ backgroundColor: rgbColor(0, 0, colors.rgb.b), display: 'inline-block', margin: '0px 2px', height: '20px', width: '100%' }}></div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            R: {colors.rgb.r}
          </Col>
          <Col className="text-center">
            G: {colors.rgb.g}
          </Col>
          <Col className="text-center">
            B: {colors.rgb.b}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Result;
