// app/registro/page.tsx
'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  usuario: string;
  correo: string;
  password: string;
  confirmPassword: string;
}

export default function Registro() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
    correo: '',
    password: '',
    confirmPassword: ''
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

    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setLoading(true);

    try {
      // 1. Registrar usuario en Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.correo,
        password: formData.password,
      });

      if (authError) throw authError;

      if (!authData.user) {
        throw new Error('No se pudo crear el usuario');
      }

      // 2. Crear registro en la tabla usuarios
      const { error: dbError } = await supabase
        .from('usuarios')
        .insert([
          {
            id_usuario: authData.user.id,
            usuario: formData.usuario,
            correo: formData.correo,
            foto_perfil: null,
            bio: null
          }
        ]);

      if (dbError) throw dbError;

      alert('Registro exitoso! Verifica tu correo electrónico.');
      router.push('/login');
      
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Ocurrió un error durante el registro');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Crear Cuenta</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre de usuario</label>
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Tu nombre de usuario"
            />
          </div>

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
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Repite tu contraseña"
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            style={{...styles.button, ...(loading && styles.buttonDisabled)}}
          >
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>

        <p style={styles.link}>
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" style={styles.linkText}>
            Inicia sesión aquí
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
    backgroundColor: '#4CAF50',
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
    color: '#4CAF50',
    textDecoration: 'underline',
    fontWeight: '500'
  }
};