import { useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Container from "@mui/material/Container";
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { authUser } from '../store/localStorage';
import { useNavigate } from "react-router-dom";


function Login() {
    const [values, setValues] = useState({
        email:'',
        password: '',
        openAler:false,
        alertText:'',
        showPassword: false,
    });
    let navigate = useNavigate();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
         setValues({
            ...values,
            openAler:false,
        });
      };

    const loginHandler = (e) => {
        e.preventDefault();

        const user = {
            email: values.email,
            password: values.password
        }
        const flag = authUser(user);

        if(flag) return navigate("/");

        else {
            setValues({
                ...values,
                openAler:true,
                alertText: "Неверный логин или пароль"
            })
            return
        }
    }
    return (
        <Container maxWidth="lg">
            <Box
            component="form"
            sx={{
                width: 500,
                maxWidth: '100%',
                m:"50px auto",
                border:"1px solid #000",
                padding:"20px"
              }}
            noValidate
            autoComplete="off"
            onSubmit={loginHandler}
            >
                 <Typography variant="h4" component="h4" sx={{mb:"20px", textAlign:"center"}}>
                    Login
                </Typography>
                <TextField fullWidth type="text" id="email" label="Email" variant="outlined" sx={{mb:"20px"}} value={values.email}
                onChange={handleChange('email')} />
                
                <FormControl fullWidth variant="outlined" sx={{mb:"20px"}}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
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
                
                <Button  type="submit" variant="contained" size="large" sx={{display:"flex", m:"0 auto"}} >Login</Button>
                <Snackbar open={values.openAler} autoHideDuration={3000} onClose={handleClose}>
                    <Alert severity="error" onClose={handleClose} sx={{ width: '100%' }}>
                        {values.alertText}
                    </Alert>
                </Snackbar>
            </Box>
        </Container>
    )
}

export default Login;