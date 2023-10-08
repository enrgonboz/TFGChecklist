"use client"

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Set loading to false on initialization
  const router = useRouter();

  const handleLogin = () => {
    setLoading(true); // When the form is submitted, set loading to true
    console.log('Email:', email);
    console.log("Password:", password);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Bienvenido de nuevo, inicia sesión
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
              <Typography align="center" gutterBottom>
                ¿Olvidaste tu contraseña?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading} // Disable the button when loading is true
                href='/home'
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
              <Typography align="center" gutterBottom>
                ¿No tienes una cuenta?
                <Link href="/register" underline="always">
                  Regístrate
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Login;