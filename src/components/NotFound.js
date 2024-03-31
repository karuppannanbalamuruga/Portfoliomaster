import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>⚠️</div>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.text}>The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    marginTop: '100px',
  },
  icon: {
    fontSize: '4em',
    color: '#FF5733',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '2.5em',
    color: '#FF5733',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.5em',
    color: '#333',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1.2em',
    color: '#3498db',
    textDecoration: 'none',
  },
};

export default NotFound;
