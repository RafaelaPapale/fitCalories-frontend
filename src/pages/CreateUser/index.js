import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { TextField, Typography, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import alimentos from '../../assets/images/alimentos.png';

export default function CreateUser() {
  const navigate = useNavigate();

  const styles = {
    boxPrincipal: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
      height: '100%',
      background: `url(${alimentos}) no-repeat left top fixed`,
      backgroundSize: 'cover',
    },
    boxIconButton: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      m: 0,
      p: 0,
    },
    icon: {
      color: '#ff7300',
      m: 0,
      p: 0
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
    txtFieldPeso: {
      width: '50%',
      backgroundColor: 'white !important',
      mr: '12px',
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
    txtFieldAltura: {
      width: '50%',
      backgroundColor: 'white !important',
      color: 'white !important',
      ml: '12px',
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
    boxButtonNew: {
      mt: '52px',
      height: '42px',
      backgroundColor: '#ff7300',
      borderRadius: '10px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#de6021',
      }
    },
    box: {
      display: 'flex',
      backgroundColor: 'white',
      position: 'absolute',
      width: '80%',
      height: '80%',
      borderRadius: '20px',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      m: '36px',
    },
    right: {
      display: 'flex',
      flexDirection: 'column',
      width: '35%',
      height: '100%',
    },
    boxText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      mr: '36px',
    },
    text: {
      color: '#ff7300',
      fontSize: '20px',
      textAlign: 'center',
    },
    boxForm: {
      display: 'flex',
      flex: 1,
      height: '100%',
      flexDirection: 'column',
      pl: '36px',
      justifyContent: 'center',
      borderLeft: '2px solid #ff7300',
    },
    boxTxtRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };

  const handleClick = (e) => {
    navigate(`/`);
  }

  return (
    <Box sx={styles.boxPrincipal}>
      <Box sx={styles.box}>
        <Box sx={styles.container}>
          <Box sx={styles.right}>
            <Box sx={styles.boxIconButton}>
              <IconButton disableRipple onClick={(e) => handleClick(e)}>
                <ArrowBackIosIcon sx={styles.icon} />
              </IconButton>
            </Box>
            <Box sx={styles.boxText}>
              <Typography sx={styles.text}>
                Por favor, insira seus dados para que possamos cadastrá-los em nossa plataforma.
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.boxForm}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="E-mail"
              disableRipple
              sx={styles.txtField}
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Nome"
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
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Idade"
              disableRipple
              sx={styles.txtField}
              InputProps={{
                endAdornment: <InputAdornment position="end">anos</InputAdornment>,
              }}
            />
            <Box sx={styles.boxTxtRow}>
              <TextField
                required
                variant="outlined"
                label="Peso"
                disableRipple
                sx={styles.txtFieldPeso}
                InputProps={{
                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}
              />
              <TextField
                required
                variant="outlined"
                label="Altura"
                disableRipple
                sx={styles.txtFieldAltura}
                InputProps={{
                  endAdornment: <InputAdornment position="end">metros</InputAdornment>,
                }}
              />
            </Box>
            <Button fullWidth disableRipple sx={styles.boxButtonNew}>
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}