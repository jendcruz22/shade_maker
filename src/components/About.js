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
            Shade Maker analyzes the dominant colors in your images or uses the color selection provided by you. It uses a combination of powerful technologies:
            <ul>
              <li><b>ReactJS</b> and its Hooks allow a smooth and efficient user experience.</li>
              <li><b>HTML5</b> Canvas enables Shade Maker to directly analyze the pixels within your image.</li>
              <li><b>JavaScript</b> is the programming language that powers the core functionality of this application.</li>
              <li><b><a className={styles.links} href='https://www.thecolorapi.com/'>The Color API <BoxArrowUpRight /></a></b> integration ensures you receive the most accurate and up-to-date color information possible.</li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default About;