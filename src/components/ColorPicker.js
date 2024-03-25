import { Form } from 'react-bootstrap';

const ColorPicker = ({ currentColor, onColorChange }) => {
    // A function that ensures the color passed to this component is always prefaced with a #
    function addHashtag(value) {
        if (value.startsWith('#')) {
            return value;
        }
        else {
            return "#"+value;
        }
    }

    currentColor = addHashtag(currentColor);
    
    return (
        <>
            <Form>
                <Form.Label htmlFor="colorInput">Pick a color:</Form.Label>
                <Form.Control id="colorInput" type="color" onChange={(event) => {
                    onColorChange(event.target.value)
                }} value={currentColor}></Form.Control>
            </Form>
        </>
    );
}

export default ColorPicker;