// app/login/page.tsx
'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  correo: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    correo: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.correo,
        password: formData.password,
      });

      if (error) throw error;

      console.log('Usuario autenticado:', data.user);
      router.push('/'); // Redirigir a la página principal
      router.refresh(); // Refrescar para actualizar el estado de autenticación
      
    } catch (error) {
      setError('Correo o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="tu@email.com"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Tu contraseña"
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            style={{...styles.button, ...(loading && styles.buttonDisabled)}}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <p style={styles.link}>
          ¿No tienes cuenta?{' '}
          <Link href="/registro" style={styles.linkText}>
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#555'
  },
  input: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '14px',
    transition: 'border-color 0.3s',
    outline: 'none'
  },
  button: {
    padding: '12px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed'
  },
  error: {
    color: '#f44336',
    fontSize: '14px',
    textAlign: 'center',
    margin: '0'
  },
  link: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: '#666'
  },
  linkText: {
    color: '#2196F3',
    textDecoration: 'underline',
    fontWeight: '500'
  }
};