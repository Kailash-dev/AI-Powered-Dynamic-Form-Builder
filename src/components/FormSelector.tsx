import React from 'react';
import { formSchemas } from '../data/samples';


const FormSelector = () => {
    React.useEffect(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    }
  `;
  document.head.appendChild(style);
}, []);
  const handlePrint = (form: any) => {
    const printWindow = window.open('', '_blank');
    const html = `
      <html>
        <head>
          <title>${form.title}</title>
          <style>
            body { font-family: Arial; padding: 40px; }
            h2 { text-align: center; margin-bottom: 40px; }
            label { font-weight: bold; display: block; margin-top: 20px; }
            .field { height: 30px; border-bottom: 1px solid #000; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <h2>${form.title}</h2>
          ${form.fields.map((field: any) => `<label>${field}:</label><div class="field"></div>`).join('')}
          <script>window.onload = () => window.print();</script>
        </body>
      </html>
    `;
    printWindow?.document.write(html);
    printWindow?.document.close();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Select a Form Template</h2>
      <div style={styles.grid}>
        {formSchemas.map((form) => (
          <div
            key={form.id}
            style={styles.card}
            onClick={() => handlePrint(form)}
          >
            <h3 style={styles.cardTitle}>{form.title}</h3>
            <p style={styles.cardDescription}>
              {form.fields.length} field{form.fields.length > 1 ? 's' : ''} · Click to print
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  },
  cardTitle: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#2E7D32',
    marginBottom: '10px',
  },
  cardDescription: {
    color: '#555',
    fontSize: '0.95rem',
  },
};

export default FormSelector;
