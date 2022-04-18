import { useContext } from 'react';

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
import { Button } from '@mui/material';

import Sidebar from '../../components/Sidebar';
import ModalCreate from '../../components/ModalCreate';
import { Context } from '../../contexts';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Arroz', 159, '1 colher',Date(Date.now()).toString(), ''),
  createData('Feijão', 237, '1 concha', Date(Date.now()).toString(), ''),
  createData('Ovo', 262, '1 unidade', Date(Date.now()).toString(), ''),
  createData('Maçã', 305, '1 unidade', Date(Date.now()).toString(), ''),
  createData('Danone', 356, '1 unidade', Date(Date.now()).toString(), ''),
];

export default function Dashboard() {
  const {
    setOpenModalCreate,
  } = useContext(Context);

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
  }

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
            />
            <Button disableRipple sx={styles.buttonAlterar}>Alterar</Button>
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
            />
          </Box>
        </Box>
        <Box sx={styles.boxButtonNew} onClick={() => setOpenModalCreate(true)}>
          <Button disableRipple sx={styles.buttonNew}>Novo consumo</Button>
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
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.calories}</StyledTableCell>
                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                    <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="center">{row.protein}</StyledTableCell>
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
