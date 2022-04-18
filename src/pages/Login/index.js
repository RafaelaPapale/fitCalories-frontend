import { useNavigate } from 'react-router-dom';

import alimentos from '../../assets/images/alimentos.png';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function Login() {
    const navigate = useNavigate();

    const styles = {
        avatarAberto: {
            width: '60%',
            height: '100%',
        },
        boxPrincipal: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
        },
        boxButtonNew: {
            mt: '20px',
            mb: '20px',
            backgroundColor: '#ff7300',
            borderRadius: '10px',
            color: 'white',
            '&:hover': {
                backgroundColor: '#de6021',
            }
        },
        boxButtonCreate: {
            mt: 3,
            backgroundColor: "White",
            borderRadius: '10px',
            color: '#ff7300',
        },
        boxCreate: {
            display: 'flex',
            flexDirection: 'column',
            m: '30px',
            justifyContent: 'center',
            alignItems: 'center',

        },
        boxTypographyCreate: {
            color: '#ffd000',
            fontSize: '20px',
            alignItems: 'center',
            justifyContent: 'center',

        },
        listItemButton: {
            backgroundColor: '#b03b00',
            height: '55px',
            '&:hover, &:selected, &:focused': {
                backgroundColor: '#de6021',
            }
        },
        txtField: {
            mb: '30px',
            backgroundColor: 'white !important',
            color: 'white !important',
            '& label.Mui-focused': {
                color: '#ba0041',
                backgroundColor: 'transparent !important',
            },
            '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                backgroundColor: 'white !important',
                '&.Mui-focused fieldset': {
                    backgroundColor: 'transparent !important',
                    borderRadius: '10px',
                    borderColor: '#ba0041',
                },
            },
        },
    };

    const handleClickCreate = (e) => {
        navigate(`/create`);
    };

    const handleClickEntrar = (e) => {
        navigate(`/dashboard`);
    };

    return (
        <Box sx={styles.boxPrincipal}>
            <Avatar variant="square"
                src={alimentos}
                sx={styles.avatarAberto}
            />
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box
                    sx={{
                        p: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '50px' }}>
                        <Typography sx={{ color: '#ff7300', fontWeight: 'bold', fontSize: '60px', mt: '20px' }}>
                            Fit Calories
                        </Typography>
                        <Typography sx={{ color: '#ffd000', fontSize: '20px', mt: '20px' }}>
                            Olá! Insira suas credenciais para continuar
                        </Typography>
                    </Box>

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Email"
                        disableRipple
                        sx={styles.txtField}
                    />
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Senha"
                        disableRipple
                        sx={styles.txtField}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Lembrar minhas credenciais"
                    />
                    <Button
                        fullWidth
                        disableRipple
                        sx={styles.boxButtonNew}
                        onClick={(e) => handleClickEntrar(e)}
                    >
                        Entrar
                    </Button>

                    <Box sx={styles.boxCreate}>
                        <Typography sx={styles.boxTypographyCreate} >
                            Não possui uma conta?
                        </Typography>
                        <Button
                            startIcon={<AddIcon />}
                            sx={styles.boxButtonCreate}
                            disableRipple
                            onClick={(e) => handleClickCreate(e)}
                        >
                            Criar
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}