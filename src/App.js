import ColorPicker from './components/ColorPicker.js';
import Result from './components/Result.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';

function App() {

  let [currentColor, setCurrentColor] = useState("000000");
  let [colors, setColors] = useState(null);

  const fetchData = useCallback(async () => {
    let colorVal = currentColor;

    if (colorVal.startsWith('#')) {
      colorVal = colorVal.slice(1);
    }
    
    try {
      const response = await fetch(`https://www.thecolorapi.com/id?hex=${colorVal}`);
      if (!response.ok) {
        throw new Error('Error fetching color data');
      }
      const data = await response.json();
      setColors(data);
    } catch (error) {
      console.error('Error fetching color data:', error);
      setColors(null);
    }
  }, [currentColor]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <Container>
      <Row>
        <Col>
          {/* Passes currentColor as a prop to ColorPicker and defines an onColorChange function that updates currentColor when the color changes */}
          <ColorPicker currentColor={currentColor} onColorChange={currentColor => { setCurrentColor(currentColor); }} />
        </Col>
        <Col>
          {colors !== null && <Result colors={colors} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
