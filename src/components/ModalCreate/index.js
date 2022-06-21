import { useContext, useState } from 'react';

import Box from '@mui/material/Box';
import { Button, Modal } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { TextField } from '@mui/material';

import { Context } from '../../contexts';
import FoodClient from '../../resources/alimentos';
import { toast } from 'react-toastify';

export default function ModalCreate() {
  const {
    openModalCreate,
    setOpenModalCreate,
    setListFood,
  } = useContext(Context);

  const [nome, setNome] = useState('');
  const [caloria, setCaloria] = useState('');
  const [quantidade, setQuantidade] = useState('');

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
      width: '800px',
      height: '430px',
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
  };

  const handleClick = async () => {
    const usuario = JSON.parse(localStorage.getItem('SistemUser'));

    const date = new Date();
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear();

    const data = {
      userId: usuario.id,
      data: `${dia}/${mes}/${ano}`,
      quantidade: parseInt(quantidade, 10),
      caloria: parseInt(caloria, 10),
      nome,
    };

    const response = await FoodClient.createFood(data);

    if(response.status === 200) {
      toast.success("Alimento cadastrado com sucesso");
      const result = await FoodClient.listFood({ userId: usuario.id });
      if(result.status === 200) setListFood(result.data);
    } else {
      toast.error("Erro ao cadastrar alimento!");
    }

    setNome('');
    setQuantidade('');
    setCaloria('');
  };

  return (
    <Modal
      open={openModalCreate}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="modal-change-coordinate"
    >
      <Box sx={styles.boxModal}>
        <Box sx={styles.boxIconButton}>
          <IconButton disableRipple onClick={() => setOpenModalCreate(false)}>
            <ArrowBackIosIcon sx={styles.icon} />
          </IconButton>
        </Box>
        <Box>
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
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Quantidade de calorias"
            disableRipple
            sx={styles.txtField}
            value={caloria}
            onChange={(e) => setCaloria(e.target.value)}
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Quantidade consumida"
            disableRipple
            sx={styles.txtField}
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
          <Box sx={styles.boxButton}>
            <Button disableRipple disabledRipple sx={styles.buttonNew} onClick={handleClick}>
              Cadastrar consumo
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
