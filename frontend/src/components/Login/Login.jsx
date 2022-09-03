import React , {useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import CssBaseline from '@mui/material/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
// import TextField from '@mui/joy/TextField';
// import Button from '@mui/joy/Button';
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'
import './login.css'


const Login = () => {

    const navigate = useNavigate();

    const [loginError, setLoginError] = useState([]);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        localStorage.setItem('userID', JSON.stringify(userData));
    }, [userData]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
        //shelter: false,
        }
    });

    const onSubmit = (data) =>  {

        const validation = fetch("http://localhost:3030/login", {
            method: "POST",
            //   credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        })
        .then( response => {
                if (!response.ok) { setLoginError(response) };

                return response.json();

            }
        )

        const saveUser = async () => {

            const userLogged = await validation;

            if (userLogged.user){
                setUserData(userLogged);
            }

            if(userData.user) {return navigate('/')};
        };

        saveUser();
    };

    return (
        <>
            <Navbar />

            <CssVarsProvider className="Ubicacion">
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
                    <form className='mb-3' onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control"  aria-invalid={errors.email ? "true" : "false"}{...register("email",{ required: true, maxLength: 25 })}/>
                            </div>                       
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" suggested="current-password" aria-invalid={errors.password ? "true" : "false"}{...register("password",{ required: true, maxLength: 20, minLength: 6 })}/>
                            </div>
                        </div>
                        { loginError.ok === false &&
                            <p className='text-center text-danger fw-bold mb-0 mt-3'>
                                Credenciales inválidas...
                            </p>
                        }
                        <div className="position-relative mt-5">
                            <button
                                type="submit"
                                className="btn btn-primary position-absolute top-0 start-50 translate-middle"
                                >
                                Ingresar
                            </button>
                        </div>
                    </form>
                    <Typography
                        endDecorator={<NavLink to="/Register">Registrarse</NavLink>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        ¿No tienes una cuenta?

                    </Typography>
                </Sheet>

            </CssVarsProvider>

            <Footer />
        </>
    )
}

export default Login
