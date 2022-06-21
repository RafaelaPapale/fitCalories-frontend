import { useContext, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { Modal } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import tabela from '../../assets/images/tabela.jpg';

import { Context } from '../../contexts';

export default function ModalUsuario() {
  const {
    openModalUsuario,
    setOpenModalUsuario,
  } = useContext(Context);

  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');
  const [pesoSugerido, setPesoSugerido] = useState('');

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('SistemUser'));

    setPeso(usuario.peso);
    setImc(usuario.imc.toFixed(2));

    const peso1 = 18.5 * (usuario.altura * usuario.altura);
    const peso2 = 24.99 * (usuario.altura * usuario.altura);

    const peso3 = Math.floor(Math.random() * (peso2 - peso1 + 1)) + peso1;

    setPesoSugerido(peso3.toFixed(2));
  }, []);

  const styles = {
    boxModal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: 24,
      p: 4,
      borderRadius: '10px',
      backgroundColor: 'white',
      width: '850px',
      height: '500px',
    },
    avatarAberto: {
      width: '72%',
      height: '50%',
      ml: '110px',
      pt: '25px',
    },
    boxTable: {
      pt: '24px',
    },
    boxPrincipal: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
    txtField: {
      width: '100%',
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
    txtFieldAtual: {
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
    txtFieldSugerido: {
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
    boxIconButton: {
      display: 'flex',
      justifyContent: 'start',
      mb: '24px',
    },
    icon: {
      color: '#d14600'
    },
    boxButton: {
      display: 'flex',
      justifyContent: 'end',
    },
    buttonNew: {
      backgroundColor: '#d14600',
      color: 'white',
      borderRadius: '10px',
      width: '210px',
      '&:hover': {
        backgroundColor: '#de6021',
      }
    },
    boxRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  };

  return (
    <Modal
      open={openModalUsuario}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="modal-change-coordinate"
    >
      <Box sx={styles.boxModal}>
        <Box sx={styles.boxIconButton}>
          <IconButton disableRipple onClick={() => setOpenModalUsuario(false)}>
            <ArrowBackIosIcon sx={styles.icon} />
          </IconButton>
        </Box>
        <Box>
          <TextField
            disabled
            required
            fullWidth
            variant="outlined"
            label="IMC"
            disableRipple
            sx={styles.txtField}
            value={imc}
          />
          <Box sx={styles.boxRow}>
            <TextField
              disabled
              required
              variant="outlined"
              label="Peso Atual"
              disableRipple
              sx={styles.txtFieldAtual}
              InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              }}
              value={peso}
            />
            <TextField
              disabled
              required
              variant="outlined"
              label="Peso Sugerido"
              disableRipple
              sx={styles.txtFieldSugerido}
              InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              }}
              value={pesoSugerido}
            />
          </Box>
          <Avatar variant="square"
            src={tabela}
            sx={styles.avatarAberto}
          />
        </Box>
      </Box>
    </Modal>
  )
}
