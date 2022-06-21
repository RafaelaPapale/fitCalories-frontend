import { useContext, useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import Sidebar from '../../components/Sidebar';
import ModalCreate from '../../components/ModalCreate';
import { Context } from '../../contexts';
import CaloriasClient from '../../resources/calorias';
import { toast } from 'react-toastify';
import FoodClient from '../../resources/alimentos';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ffd000',
    color: 'black',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Dashboard() {
  const {
    setOpenModalCreate,
    listFood,
    setListFood,
  } = useContext(Context);

  const [meta, setMeta] = useState('');
  const [userId, setUserId] = useState('');
  const [total, setTotal] = useState('');

  const styles = {
    txtField: {
      width: '350px',
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
    boxHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      width: '100%',
      height: '100%',
      p: '24px',
    },
    boxHeaderLeft: {
      display: 'flex',
      flexDirection: 'row',
    },
    buttonAlterar: {
      backgroundColor: '#ba0041',
      color: 'white',
      borderRadius: '10px',
      width: '120px',
      height: '56px',
      ml: '24px',
      '&:hover': {
        backgroundColor: '#9c0036',
      }
    },
    boxButtonNew: {
      display: 'flex',
      justifyContent: 'end',
      pt: '24px',
    },
    buttonNew: {
      backgroundColor: '#ba0041',
      color: 'white',
      borderRadius: '10px',
      width: '350px',
      height: '56px',
      ml: '24px',
      '&:hover': {
        backgroundColor: '#9c0036',
      }
    },
    boxTable: {
      pt: '24px',
    },
    tableContainer: {
      borderRadius: '10px',
    },
    table: {
      minWidth: 700,
    },
  };

  useEffect(() => {
    async function loadStorage() {
      const usuario = JSON.parse(localStorage.getItem('SistemUser'));
      setUserId(usuario.id);

      const date = new Date();
      const dia = date.getDate().toString().padStart(2, '0');
      const mes = (date.getMonth() + 1).toString().padStart(2, '0');
      const ano = date.getFullYear();

      const data = {
        userId: usuario.id,
        data: `${dia}/${mes}/${ano}`,
      };

      const response = await CaloriasClient.listCalorias(data);

      if (response.status === 200) {
        setMeta(response.data.totalDesejado);
        setTotal(response.data.totalConsumido);
      } else {
        setMeta('');
      }
    }

    loadStorage();
  }, []);

  useEffect(() => {
    async function loadFood() {
      const usuario = JSON.parse(localStorage.getItem('SistemUser'));
      const result = await FoodClient.listFood({ userId: usuario.id });

      if (result.status === 200) setListFood(result.data);
    }

    loadFood();
  }, []);

  useEffect(() => {
    async function loadCalorias() {
      const usuario = JSON.parse(localStorage.getItem('SistemUser'));
      setUserId(usuario.id);


      const date = new Date();
      const dia = date.getDate().toString().padStart(2, '0');
      const mes = (date.getMonth() + 1).toString().padStart(2, '0');
      const ano = date.getFullYear();

      const data = {
        userId,
        data: `${dia}/${mes}/${ano}`,
      };
      const result = await CaloriasClient.listCalorias(data);

      if (result.status === 200) setTotal(result.data.totalConsumido);
    }

    loadCalorias();
  }, [listFood]);


  const handleClick = async () => {
    const usuario = JSON.parse(localStorage.getItem('SistemUser'));
    setUserId(usuario.id);


    const date = new Date();
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear();

    const data = {
      userId,
      totalDesejado: parseInt(meta, 10),
      data: `${dia}/${mes}/${ano}`,
    };

    const response = await CaloriasClient.createCalorias(data);

    if (response.status === 200) {
      setMeta(response.data.totalDesejado);
      toast.success('Meta diária registrada com sucesso!')
    } else {
      setMeta('');
      toast.error('Erro ao cadastrar meta diária!');
    }
  };

  const handleDelete = async (e, row) => {
    const usuario = JSON.parse(localStorage.getItem('SistemUser'));

    const data = {
      userId: usuario.id,
      id: row.id,
    };

    const response = await FoodClient.deleteFood(data);
    if (response.status === 200) {
      toast.success('Alimento deletado com sucesso!');
      const result = await FoodClient.listFood({ userId: usuario.id });

      if (result.status === 200) setListFood(result.data);
    } else {
      toast.error('Erro ao deletar alimento!');
    }
  };

  return (
    <Box sx={styles.boxPage}>
      <Sidebar />
      <ModalCreate />
      <Box sx={styles.container}>
        <Box sx={styles.boxHeader}>
          <Box sx={styles.boxHeaderLeft}>
            <TextField
              label="Meta diária"
              variant="outlined"
              disableRipple
              sx={styles.txtField}
              InputProps={{
                endAdornment: <InputAdornment position="end">calorias</InputAdornment>,
              }}
              value={meta}
              onChange={(e) => setMeta(e.target.value)}
            />
            <Button disableRipple sx={styles.buttonAlterar} onClick={handleClick}>Alterar</Button>
          </Box>
          <Box>
            <TextField
              label="Total consumido"
              variant="outlined"
              disableRipple
              sx={styles.txtField}
              InputProps={{
                endAdornment: <InputAdornment position="end">calorias</InputAdornment>,
              }}
              value={total}
            />
          </Box>
        </Box>
        <Box sx={styles.boxButtonNew}>
          <Button
            disabled={meta === ''}
            disableRipple
            sx={styles.buttonNew}
            onClick={() => setOpenModalCreate(true)}
          >
            Novo consumo
          </Button>
        </Box>
        <Box sx={styles.boxTable}>
          <TableContainer component={Paper} sx={styles.tableContainer}>
            <Table sx={styles.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Alimento</StyledTableCell>
                  <StyledTableCell align="center">Qtd. Calorias</StyledTableCell>
                  <StyledTableCell align="center">Qtd. Consumida</StyledTableCell>
                  <StyledTableCell align="center">Data</StyledTableCell>
                  <StyledTableCell align="center">#</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listFood.map((row) => (
                  <StyledTableRow key={Math.random()}>
                    <StyledTableCell align="center">{row.nome}</StyledTableCell>
                    <StyledTableCell align="center">{row.caloria}</StyledTableCell>
                    <StyledTableCell align="center">{row.quantidade}</StyledTableCell>
                    <StyledTableCell align="center">{row.data}</StyledTableCell>
                    <StyledTableCell align="center">
                      <DeleteIcon onClick={(e) => handleDelete(e, row)} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}
