import '../index.css';
import { Card } from "react-bootstrap";

function Result({ colors }) {
  // Helper function to create RGB color string
  const rgbColor = (r, g, b) => `rgb(${r},${g},${b})`;

  return (
    <Card style={{ width: '18rem' }}>
      <div style={{ backgroundColor: colors.hex.value, height: '20px' }}></div>
      <Card.Body>
        <Card.Title>{colors.name.value}</Card.Title>
        <Card.Text>
          {colors.hex.value}
        </Card.Text>
        <div style={{ backgroundColor: rgbColor(colors.rgb.fraction.r * 255, colors.rgb.fraction.g * 255, colors.rgb.fraction.b * 255) , display: 'inline-block', margin: '0px 2px', height: '20px', width: '30%' }}></div>
        <div style={{ backgroundColor: rgbColor(colors.rgb.fraction.r * 255, colors.rgb.fraction.g * 255, colors.rgb.fraction.b * 255), display: 'inline-block', margin: '0px 2px', height: '20px', width: '30%' }}></div>
        <div style={{ backgroundColor: rgbColor(colors.rgb.fraction.r * 255, colors.rgb.fraction.g * 255, colors.rgb.fraction.b * 255), display: 'inline-block', margin: '0px 2px', height: '20px', width: '30%' }}></div>
      </Card.Body>
    </Card>
  );
}

export default Result;
