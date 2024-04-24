import { Form, Button } from 'react-bootstrap';

function ImageUpload({ onImageSelected, analyzeImage }) {
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageSelected(URL.createObjectURL(file)); 
    }
  };

  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={handleFileSelect} required />
      </Form.Group>
      <Button variant="primary" type="button" onClick= {analyzeImage}>
        Submit
      </Button>
    </Form>
  );
}

export default ImageUpload;
