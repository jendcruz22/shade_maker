import '../index.css';
import { Row, Col, Card } from "react-bootstrap";

function Result({ colors }) {
  // Helper function to create RGB color string
  const rgbColor = (r, g, b) => `rgb(${r},${g},${b})`;
  console.log(colors);

  return (
    <Card style={{ width: 'auto', marginTop: '15px' }}>
      <div style={{ backgroundColor: colors.hex.value, height: '10px' }}></div>
      <Card.Body>
        {/* Color Name + Hex Value */}
        <Card.Title>{colors.name.value} ({colors.hex.value})</Card.Title>

        {/* Color Blocks */}
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

        {/* RGB Values */}
        <Row>
          <Col className="text-center">
            <b>R:</b>{colors.rgb.r}
          </Col>
          <Col className="text-center">
            <b>G:</b>{colors.rgb.g}
          </Col>
          <Col className="text-center">
            <b>B:</b>{colors.rgb.b}
          </Col>
        </Row>

        {/* RGB Percentages */}
        <Row>
          <Col className="text-center">
            <b>R%:</b>{(colors.rgb.fraction.r * 100).toFixed(2)}
          </Col>
          <Col className="text-center">
            <b>G%:</b> {(colors.rgb.fraction.g * 100).toFixed(2)}
          </Col>
          <Col className="text-center">
            <b>B%:</b> {(colors.rgb.fraction.b * 100).toFixed(2)}
          </Col>
        </Row>

        {/* hsv Percentages */}
        <Row>
          <Col className="text-center">
            <b>H:</b>{colors.hsv.h}
          </Col>
          <Col className="text-center">
            <b>S:</b>{colors.hsv.s}
          </Col>
          <Col className="text-center">
            <b>V:</b>{colors.hsv.v}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Result;
