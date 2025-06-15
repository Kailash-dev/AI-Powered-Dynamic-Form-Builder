import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>🧾 Smart Form Generator</h1>
        <p style={styles.subtitle}>
          Instantly generate and print professional forms with just one click.
        </p>
        <button onClick={() => navigate('/forms')} style={styles.button}>
          Choose a Form
        </button>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: '100vh',
    background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  } as React.CSSProperties,
  content: { maxWidth: '600px' },
  title: { fontSize: '3rem', marginBottom: '1rem' },
  subtitle: { fontSize: '1.25rem', marginBottom: '2rem' },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    background: '#fff',
    color: '#2E7D32',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  } as React.CSSProperties,
};

export default HeroSection;
