import Container from 'react-bootstrap/Container';
import styles from '../styles.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScroll() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{padding: 0}}>
            <Container fluid style={{margin: '0 10%', padding: '2% 0'}}>
                <Navbar.Brand href="#" className={styles.navMargin}>Shade Maker</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#about">About the App</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://jennysresume.netlify.app/">About the Developer</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;