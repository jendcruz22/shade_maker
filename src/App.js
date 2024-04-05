import React, { useCallback, useEffect, useState } from 'react';
import Nav from './components/Nav.js';
import ImageUpload from './components/ImageUpload.js';
import ImageDisplay from './components/ImageDisplay.js';
import ColorPicker from './components/ColorPicker.js';
import Result from './components/Result.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [selectedImage, setSelectedImage] = useState('');
  const [currentColor, setCurrentColor] = useState("#000000");
  const [colors, setColors] = useState(null);

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
    <>
      <Nav />
      <ImageUpload onImageSelected={setSelectedImage} />
      <ImageDisplay selectedImage={selectedImage} />
      {/* <ImageColorIdentifier /> */}

      <Container>
        <Row>
          <Col>
            <ColorPicker currentColor={currentColor} onColorChange={setCurrentColor} />
          </Col>
          <Col>
            {colors !== null && <Result colors={colors} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
