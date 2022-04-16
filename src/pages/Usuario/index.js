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
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Usuario() {
    const {
        setOpenModalCreate,
    } = useContext(Context);

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
        boxButtonRegister: {
            width: '700px',
            height: '40px',
            mt: '40px',
            mb: '20px',
            backgroundColor: '#ff7300',
            borderRadius: '10px',
            color: 'white',
            '&:hover': {
                backgroundColor: '#de6021',
            }
        },

        boxTable: {
            pt: '24px',
        },

    }

    return (
        <Box sx={styles.boxPage}>
            <Sidebar />
            <ModalCreate />
            <Box sx={styles.container}>

                <Box sx={styles.boxTable}>
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Email"
                        disableRipple
                        sx={styles.txtField}
                    />



                </Box>

                <Box sx={styles.boxTable}>

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Nome"
                        disableRipple
                        sx={styles.txtField}
                    />


                </Box>

                <Box sx={styles.boxTable}>

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Senha"
                        disableRipple
                        sx={styles.txtField}
                    />


                </Box>

                <Box sx={styles.boxTable}>

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Idade"
                        disableRipple
                        sx={styles.txtField}
                    />


                </Box>


                <Box sx={styles.boxTable}>

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
                    />
                </Box>


                <Box sx={styles.boxTable}>

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="IMC"
                        disableRipple
                        sx={styles.txtField2}

                    />

                    <Button disableRipple sx={styles.buttonInfo}>Vizualizar Informacoes</Button>


                </Box>

                <Button fullWidth disableRipple sx={styles.boxButtonRegister}>
                    Alterar Informacoes
                </Button>

            </Box>
        </Box>
    )
}