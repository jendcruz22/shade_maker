import Button from 'react-bootstrap/Button';
import styles from '../styles.module.css';

function About() {
  return (
    <section className={styles.about} id='about'>
      <h2>About</h2>
      <p className={styles.intro}>
        
      </p>
      <div className={styles.content}>
        <p>
          
        </p>
      </div>
      <Button variant="outline-secondary" type="button">Learn More</Button>
    </section>
  );
}

export default About;