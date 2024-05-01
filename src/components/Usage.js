import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles.module.css';

function Usage() {
  return (
    <Accordion className={styles.usageAccordion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How to use the Shade Maker?</Accordion.Header>
        <Accordion.Body>
          Find details about a color by uploading an image or selecting a color from the provided palette.
          <br />
          Get detailed information about any color, including its name, hex code, RGB values, and similar shades. 
          Perfect for design inspiration or matching existing colors in your project.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Usage;