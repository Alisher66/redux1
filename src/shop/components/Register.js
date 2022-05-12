import { useState } from 'react';
import { addUser } from '../store/localStorage';
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

import { useNavigate } from "react-router-dom";


function Register() {
    const [values, setValues] = useState({
        email: '',
        name: '',
        surname: '',
        password: '',
        cpassword: '',
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

      const addUserHendler = (e) => {
        e.preventDefault();
        
        if(values.email === "" || values.name === "" || values.surname === "" || values.password === "" || 
        values.password !== values.cpassword) {
            setValues({
                ...values,
                openAler:true,
                alertText: "Пожалуйста, заполните все поля корректно!"
            })
            return
        }

        const user = {
            id: Date.now(),
            email: values.email,
            name: values.name,
            surname: values.surname,
            password: values.password
        }

        const flag = addUser(user);
        if(!flag) {
            setValues({
                ...values,
                openAler:true,
                alertText: "Пользователь с этим e-mail уже существует."
            })
            return
        }

        setValues(
            {...values,   
                email: '',
                name: '',
                surname: '',
                password: '',
                cpassword: '',
            });
        return navigate("/login");
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
            onSubmit={addUserHendler}
            >
                 <Typography variant="h4" component="h4" sx={{mb:"20px", textAlign:"center"}}>
                    Registration form
                </Typography>
                <TextField fullWidth type="text" id="email" label="Email" variant="outlined" sx={{mb:"20px"}} value={values.email}
                onChange={handleChange('email')} />
                <TextField fullWidth type="text" id="name" label="Name" variant="outlined" sx={{mb:"20px"}} value={values.name}
                onChange={handleChange('name')} />
                <TextField fullWidth type="text" id="surname" label="Surname" variant="outlined" sx={{mb:"20px"}} value={values.surname}
                onChange={handleChange('surname')} />
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

                <FormControl fullWidth variant="outlined" sx={{mb:"20px"}}>
                    <InputLabel htmlFor="cpassword">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="cpassword"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.cpassword}
                        onChange={handleChange('cpassword')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle cpassword visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Confirm Password"
                    />
                </FormControl>
                
                <Button  type="submit" variant="contained" size="large" sx={{display:"flex", m:"0 auto"}} >Save</Button>
                <Snackbar open={values.openAler} autoHideDuration={3000} onClose={handleClose}>
                    <Alert severity="error" onClose={handleClose} sx={{ width: '100%' }}>
                        {values.alertText}
                    </Alert>
                </Snackbar>
            </Box>
        </Container>
    )
}

export default Register;