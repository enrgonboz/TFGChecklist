"use client"

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link, createTheme } from '@mui/material';
import './style.css';
import Image from 'next/image';
import Logo from './resources/logo1.png';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Set loading to false on initialization

  const handleLogin = () => {
    setLoading(true); // When the form is submitted, set loading to true
    console.log('Email:', email);
    console.log("Password:", password);
  };

  return (
    <div>
      <Container maxWidth="sm" className='container'>
      <Typography variant="h5" align="center" gutterBottom>
        Bienvenido de nuevo,
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        inicia sesión
      </Typography>
        <form onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Typography align="center" gutterBottom className='forgot-password'>
                ¿Olvidaste tu contraseña?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading} // Disable the button when loading is true
                href='/home'
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </Button>
              <Typography align="center" gutterBottom className='register-link'>
                ¿No tienes cuenta?
                &nbsp;<Link href="/register" underline="always">
                Regístrate
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
        <Image src={Logo} width={100} height={100} alt="login" className='login-image'/>
      </Container>
    </div>
  );
};

export default Login;