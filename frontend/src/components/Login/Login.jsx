import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { NavLink } from 'react-router-dom'






const Login = () => {
  return (
    <CssVarsProvider>
         <CssBaseline />
         <Sheet
  variant="outlined"
  sx={{
    maxWidth: 400,
    mx: 'auto', // margin left & right
    my: 4, // margin top & botom
    py: 3, // padding top & bottom
    px: 2, // padding left & right
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    borderRadius: 'sm',
    boxShadow: 'md',
    
  }}
>
  <Typography level="h4" component="h1">
      <b>Bienvenido!</b>
    </Typography>
    <Typography level="body2">Inicie sesión o <NavLink to="/Register">registrese</NavLink></Typography>

    <TextField
    // html input attribute
    name="email"
    type="email"
    placeholder="johndoe@email.com"
    // pass down to FormLabel as children
    label="Email"
  />
  <TextField
    name="password"
    type="password"
    placeholder="password"
    label="Contraseña"
  />

<Button
    sx={{
      mt: 1,
      bgcolor: '#212121',
      '&:hover': {
        backgroundColor: '#4e342e',
        opacity: [1, 0.9],
      }
      
    }}
    className= "btnLogin"
  >
    Ingresar
  </Button>
  <Typography
    endDecorator={<NavLink to="/Register">Registrarse</NavLink>}
    fontSize="sm"
    sx={{ alignSelf: 'center' }}
  >
  ¿No tienes una cuenta?

  </Typography>
         </Sheet>
       
    </CssVarsProvider>
   
  )
}

export default Login
