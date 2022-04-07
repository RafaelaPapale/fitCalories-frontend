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

import Sidebar from '../../components/Sidebar';
import { Button } from '@mui/material';

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
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Dashboard() {
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
    }
  }
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', m: 0, p: 0 }}>
      <Sidebar />
      <Box sx={{ width: '100%', height: '100%', p: '24px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <TextField id="outlined-basic"
              label="Meta diária"
              variant="outlined"
              disableRipple
              sx={styles.txtField}
              InputProps={{
                endAdornment: <InputAdornment position="end">calorias</InputAdornment>,
              }}
            />
            <Button disableRipple sx={{
              backgroundColor: '#ba0041',
              color: 'white',
              borderRadius: '10px',
              width: '120px',
              height: '56px',
              ml: '24px',
              '&:hover': {
                backgroundColor: '#9c0036',
              }
            }}>Alterar</Button>
          </Box>
          <Box>
            <TextField id="outlined-basic"
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
        <Box sx={{ display: 'flex', justifyContent: 'end', pt: '24px' }}>
          <Button disableRipple sx={{
            backgroundColor: '#ba0041',
            color: 'white',
            borderRadius: '10px',
            width: '350px',
            height: '56px',
            ml: '24px',
            '&:hover': {
              backgroundColor: '#9c0036',
            }
          }}>Novo consumo</Button>
        </Box>
        <Box sx={{ pt: '24px' }}>
          <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Dessert (100g serving)</StyledTableCell>
                  <StyledTableCell align="center">Calories</StyledTableCell>
                  <StyledTableCell align="center">Fat&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell>
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
