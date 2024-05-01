import { Container, Accordion } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import styles from '../styles.module.css';

function About() {


  return (
    <Container className={styles.container} id='about'>
      <h1 className={styles.mainHeadings}>About <span className={styles.colorChanger}>Shade Maker</span></h1>
      <p className={styles.intro}>Shade Maker is your one-stop for exploring color!</p>

      {/* <Button variant="outline-secondary" type="button">Learn More</Button> */}

      <Accordion className={styles.aboutAccordion}>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ marginBottom: '0rem' }}>How to use the Shade Maker?</Accordion.Header>
          <Accordion.Body>
            Shade Maker gives you detailed information about any color, including its name, hex code, RGB values.
            Perfect for design inspiration or matching existing colors in your project.
            <br />
            <ul>
              <li>
                Upload an image and instantly discover the dominant color in your image.</li>
              <li>
                Alternatively, you can select a color manually and get detailed information about the color selected.</li>
            </ul>
            <br />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header style={{ marginBottom: '0rem' }}>How does this application work?</Accordion.Header>
          <Accordion.Body>
            Shade Maker leverages the power of HTML5 Canvas and JavaScript to analyze each pixel in your image and identify the most prevalent color.
            <br />
            Additionally, the <a className={styles.links} href='https://www.thecolorapi.com/'>colorAPI <BoxArrowUpRight /></a> integration ensures you get the most up-to-date color information.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default About;