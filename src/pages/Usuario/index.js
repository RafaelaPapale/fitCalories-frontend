/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';

import Sidebar from '../../components/Sidebar';
import ModalUsuario from '../../components/ModalUsuario';
import { Context } from '../../contexts';

export default function Usuario() {
  const {
    setOpenModalUsuario,
    user,
  } = useContext(Context);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');
  const [imc, setImc] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('SistemUser'));

    setNome(usuario.nome);
    setEmail(usuario.email);
    setSenha(usuario.senha);
    setAltura(usuario.altura);
    setPeso(usuario.peso);
    setIdade(usuario.idade);
    setImc(usuario.imc);
  }, []);

  const styles = {
    txtField: {
      width: '700px',
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
    txtField2: {
      width: '338px',
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
      width: '338px',
      ml: '24px',
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
    boxPage: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      m: 0,
      p: 0,
    },
    container: {
      width: '100%',
      height: '100%',
      p: '24px',
    },
    buttonInfo: {
      backgroundColor: '#ba0041',
      color: 'white',
      borderRadius: '10px',
      width: '338px',
      height: '53px',
      ml: '24px',
      '&:hover': {
        backgroundColor: '#9c0036',
      }
    },
    boxButtonInfo: {
      width: '338px',
      height: '40px',
      mt: '40px',
      mb: '20px',
      mr: '12px',
      backgroundColor: '#ff7300',
      borderRadius: '10px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#de6021',
      }
    },
    boxButtonLogout: {
      width: '338px',
      height: '40px',
      mt: '40px',
      mb: '20px',
      ml: '12px',
      backgroundColor: '#b80000',
      borderRadius: '10px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#960000',
      }
    },
    box: {
      pt: '24px',
    },
  };

  const handleClick = (e) => {
    navigate(`/`);
  };

  return (
    <Box sx={styles.boxPage}>
      <Sidebar />
      <ModalUsuario />
      <Box sx={styles.container}>
        <Box sx={styles.box}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            disableRipple
            sx={styles.txtField}
            disabled
            value={email}
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Nome"
            disableRipple
            sx={styles.txtField}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Senha"
            disableRipple
            sx={styles.txtField}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Idade"
            disableRipple
            sx={styles.txtField}
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Altura"
            disableRipple
            sx={styles.txtField2}
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }}
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Peso"
            disableRipple
            sx={styles.txtFieldPeso}
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
            fullWidth
            variant="outlined"
            label="IMC"
            disableRipple
            disabled
            sx={styles.txtField2}
            value={imc}
            onChange={(e) => setImc(e.target.value)}
          />
          <Button disableRipple sx={styles.buttonInfo} onClick={() => setOpenModalUsuario(true)}>
            Vizualizar informações
          </Button>
        </Box>
        <Box>
          <Button disableRipple sx={styles.boxButtonInfo}>
            Alterar informações
          </Button>
          <Button disableRipple sx={styles.boxButtonLogout} onClick={(e) => handleClick(e)}>
            Sair
          </Button>
        </Box>
      </Box>
    </Box >
  )
}
