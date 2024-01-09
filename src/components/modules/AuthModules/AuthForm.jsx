// AuthForm.jsx
import React, { useState } from 'react';
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const AuthForm = ({ isRegister }) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your registration or login logic here
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            {isRegister && (
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={values.name}
                    onChange={handleChange('name')}
                    autoComplete='true'
                />
            )}
            <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={values.email}
                onChange={handleChange('email')}
                autoComplete='true'
            />
            <FormControl variant="outlined" fullWidth margin='normal'>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" color="primary" type="submit">
                    {isRegister ? 'Register' : 'Login'}
                </Button>
                <Button variant="text" color="primary" type="submit">
                    {isRegister ? 
                        <Link to={'/auth/login'}>Already have an account ?</Link>
                        :
                        <Link to={'/auth/register'}>new Here ?</Link>}
                </Button>
            </div>
        </form>
    );
};

export default AuthForm;
