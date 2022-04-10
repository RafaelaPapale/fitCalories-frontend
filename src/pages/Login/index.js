import frutas from '../../assets/images/frutas.jpg';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



export default function SignInSide() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const styles = {
        avatarAberto: {
            width: '650px',
            height: '655px',
        },

        boxPrincipal: {
            display: 'flex',
            flexDirection: 'row',

        },

        listItemButton: {
            backgroundColor: '#b03b00',
            height: '55px',
            '&:hover, &:selected, &:focused': {
              backgroundColor: '#de6021',
            }
          },
    }



    return (

        <Box sx={styles.boxPrincipal}>


            <Avatar variant="square"
                alt="Remy Sharp"
                src={frutas}
                sx={styles.avatarAberto}
            />

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h3" color='#ff7300'>
                        Fit Calories
                    </Typography>


                    &nbsp;
                    
                    <Typography component="h2" variant="h6" color='#ffd000'>
                        Olá! Insira suas credenciais para continuar
                    </Typography>

  
                    &nbsp;
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="senha"
                            label="Senha"
                            type="senha"
                            id="senha"
                            autoComplete="current-senha"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 ,  backgroundColor: '#ff7300' }}
                        >
                            Entrar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Esqueceu a senha?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Não tem conta? Cadastre-se"}
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Grid>
        </Box>

    );
}