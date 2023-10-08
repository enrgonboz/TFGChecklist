"use client"

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, FormControlLabel, Checkbox, Link } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [policyChecked, setPolicyChecked] = useState(false);



  const handleRegister = () => {
    if (!policyChecked) {
      alert('Please agree to the policy before registering.');
      return;
    }
    // Here, you can add your registration logic, such as sending a request to a server.
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleRegister}>
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
              label="Contraseña"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="ConfirmPassword"
              label="Confirmar Contraseña"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox checked={policyChecked} onChange={(e) => setPolicyChecked(e.target.checked)} />}
              label="Aceptar los términos y condiciones"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              href='/home'
            >
              Registrarse
            </Button>
          </Grid>
        </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              ¿Ya tienes cuenta?{' '}
              <Link href="/login" underline="always">
                Iniciar sesión
              </Link>
            </Typography>
          </Grid>
      </form>
    </Container>
  );
};

export default Register;