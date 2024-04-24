// Imports
import React, { useCallback, useEffect, useState, useRef } from 'react';
import Nav from './components/Nav.js';
import ImageUpload from './components/ImageUpload.js';
import ImageDisplay from './components/ImageDisplay.js';
import ColorPicker from './components/ColorPicker.js';
import Result from './components/Result.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  // State Variables 
  const [selectedImage, setSelectedImage] = useState(''); //  Stores the path of the uploaded image 
  const [currentColor, setCurrentColor] = useState("#000000");  // Stores the current color displayed to the user
  const [colors, setColors] = useState(null);  // Stores the color data fetched from an external API
  const [dominantColor, setDominantColor] = useState(null);  // Stores the dominant color extracted from the uploaded image
  const canvasRef = useRef(null); //  A reference to a hidden canvas element used for image processing.

  // Function that analyzes the dominant color from the given image | Reference: https://dvmhn07.medium.com/learn-to-detect-image-background-colors-in-react-using-html-canvas-8c2d9e527e7d
  const analyzeImage = () => {
    if (!selectedImage) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.onload = async () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const colorMap = {};
      for (let i = 0; i < data.length; i += 4) {
        const rgb = {
          r: data[i],
          g: data[i + 1],
          b: data[i + 2],
        };
        const key = JSON.stringify(rgb);
        if (colorMap[key]) {
          colorMap[key]++;
        } else {
          colorMap[key] = 1;
        }
      }

      let dominantRGB = { r: 0, g: 0, b: 0 };
      let maxCount = 0;
      for (const key in colorMap) {
        const count = colorMap[key];
        if (count > maxCount) {
          dominantRGB = JSON.parse(key);
          maxCount = count;
        }
      }

      setDominantColor(dominantRGB);
      console.log(dominantColor);

      const { r, g, b } = dominantRGB;
      console.log(r);
      console.log(g);
      console.log(b);

      // Once the dominant color is identified, set the currentColor to be the dominant color 
      try {
        const response = await fetch(`https://www.thecolorapi.com/id?rgb=rgb(${r},${g},${b}`);
        if (!response.ok) {
          throw new Error('Error fetching color data');
        }
        const data = await response.json();
        setColors(data);
        setCurrentColor(data.hex.value);
      } catch (error) {
        console.error('Error fetching color data:', error);
        setColors(null);
      }
    };

    img.src = selectedImage;
  };

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

      <Container>
        <Row>
          <Col>
            <ImageUpload onImageSelected={setSelectedImage} analyzeImage={analyzeImage} />
            <ColorPicker currentColor={currentColor} onColorChange={setCurrentColor} />
          </Col>
          <Col>
            {colors !== null && <Result colors={colors} />}
            <ImageDisplay selectedImage={selectedImage} />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
