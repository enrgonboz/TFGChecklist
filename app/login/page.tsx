"use client"

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState('');


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading to true
      // Make a POST request to your Strapi login endpoint
      //const response = await axios.post('http://localhost:1337/api/auth/local', {
      const response = await axios.post('https://installing-strengths-metadata-turn.trycloudflare.com/api/auth/local', {  

        identifier: email,
        password: password,
      });

      // Check if the response contains an access token or user data
      if (response.data.jwt) {
        // Authentication successful, you can store the token in localStorage or a state variable
        const token = response.data.jwt;
        localStorage.setItem('token', token);
        router.push('/home');

        // Redirect the user or perform other actions as needed
        // Example: history.push('/dashboard');
      } else {
        // Authentication failed, handle the error (display a message, etc.)
        console.error('Authentication failed');
        setError('An error occurred during login. Please try again later.');
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
      setError('An error occurred during login. Please try again later.');
    } finally {
      setLoading(false); // Set loading back to false
      console.log(email, password)
    }

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
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
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