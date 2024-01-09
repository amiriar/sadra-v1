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
import { showToast } from './Toastify';
import { ToastContainer } from 'react-toastify';
import { Login, Register } from '../../../helper/validation';

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

        if(isRegister){
            const Register = async ({ values }) => {
                let isOK = true
                let isNameOK = true
                let isemailOK = true
                let isPassOK = true
            
                const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                
                if(values.name.length > 32 || values.name.length === 0) {
                    isNameOK = false
                    showToast('نام نمیتواند خالی و یا بیشتر از 32 نویسه باشد.', 'error');
                } else {
                    isNameOK = true
                }
                if(!(emailRegex.test(values.email))) {
                    isemailOK = false
                    showToast('لطفا از درست بودن ایمیل خود اطمینان حاصل کنید.', 'error');
                } else {
                    isemailOK = true
                }
                if(values.password.length > 32 || values.password.length === 0) {
                    isPassOK = false
                    showToast('رمز عبور نمیتواند خالی یا بیشتر از 32 نویسه باشد.', 'error');
                } else {
                    isPassOK = true
                }
            
                if(isOK === true){
                    const response = await fetch('http://localhost:3001/register', {
                        method:"POST",
                        headers:{ "Content-type": "application/json" },
                        body: JSON.stringify(values),
                    });
                    const result = await response.json();
                    console.log(result);
                    // if(result.statusCode === 200){
                    //     console.log("EZ");
                    // }
                }else{
                    console.log("didnt");
                }
            }
            Register({ values })
        }else{
            const test = Login({ values })
            console.log(test);
        }
        // console.log(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            {isRegister && (
                <TextField
                    label="Name ( Maximum 32 letters )"
                    fullWidth
                    margin="normal"
                    value={values.name}
                    onChange={handleChange('name')}
                    autoComplete='true'
                    inputProps={{ maxLength: 32 }}
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
                <InputLabel htmlFor="outlined-adornment-password">Password  ( Maximum 32 letters )</InputLabel>
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
                    label="Password ( Maximum 32 letters )"
                    inputProps={{ maxLength: 32 }}
                />
            </FormControl>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" color="primary" type="submit" sx={{background:"#4ca773"}}>
                    {isRegister ? 'Register' : 'Login'}
                </Button>
                <Button variant="text" color="primary" type="button">
                    {isRegister ? 
                        <Link className='buttonsClass' to={'/auth/login'}>Already have an account ?</Link>
                        :
                        <Link className='buttonsClass' to={'/auth/register'}>new Here ?</Link>}
                </Button>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </form>
    );
};

export default AuthForm;
