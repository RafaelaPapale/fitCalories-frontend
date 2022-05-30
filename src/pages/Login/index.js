import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { Context } from '../../contexts';

import UserClient from '../../resources/user';

import alimentos from '../../assets/images/alimentos.png';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const {
    loadingAuth,
    setUser,
    setLoading,
    setLoadingAuth,
    storageUser,
  } = useContext(Context);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('SistemUser');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        navigate('/dashboard');
      }
      setLoading(false);
    }

    loadStorage();
  }, []);

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
    container: {
      width: '100%',
      height: '100%'
    },
    boxForm: {
      p: '24px',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      justifyContent: 'center'
    },
    boxTitle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mb: '50px',
    },
    title: {
      color: '#ff7300',
      fontWeight: 'bold',
      fontSize: '60px',
      mt: '20px',
    },
    subTitle: {
      color: '#ffd000',
      fontSize: '20px',
      mt: '20px',
    },
    checkbox: {
      color: '#ffd000 !important',
    },
  };

  const handleClickCreate = (e) => {
    navigate(`/create`);
  };

  const handleClickEntrar = async (e) => {
    e.preventDefault();
    if (email !== '' && senha !== '') {
      setLoadingAuth(true);

      const data = {
        email,
        senha,
      }

      const auth = await UserClient.login(data);
      if (auth.status === 200) {
        let result = {
          id: auth.data.id,
          nome: auth.data.nome,
          email: auth.data.email,
          idade: auth.data.idade,
          peso: auth.data.peso,
          altura: auth.data.altura,
          imc: auth.data.imc,
        }

        setUser(result);
        storageUser(result);
        setLoadingAuth(false);
        navigate('/dashboard');
        toast.success('Bem vindo de volta!');
      } else {
        toast.error('Ops algo deu errado!');
        setLoadingAuth(false);
      }
    } else {
      toast.info("Preencha corretamente todos os campos!")
    }
  };

  return (
    <Box sx={styles.boxPrincipal}>
      <Avatar variant="square"
        src={alimentos}
        sx={styles.avatarAberto}
      />
      <Box sx={styles.container}>
        <Box sx={styles.boxForm}>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.title}>Fit Calories</Typography>
            <Typography sx={styles.subTitle}>
              Olá! Insira suas credenciais para continuar
            </Typography>
          </Box>

          <TextField
            id="email"
            required
            fullWidth
            variant="outlined"
            label="Email"
            disableRipple
            sx={styles.txtField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
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
          <Button
            fullWidth
            disableRipple
            sx={styles.boxButtonNew}
            onClick={(e) => handleClickEntrar(e)}
            id="botão-entrar"
          >
            {loadingAuth ? 'Carregando...' : 'Entrar'}
          </Button>

          <Box sx={styles.boxCreate}>
            <Typography sx={styles.boxTypographyCreate}>
              Não possui uma conta?
            </Typography>
            <Button
              startIcon={<AddIcon />}
              sx={styles.boxButtonCreate}
              disableRipple
              onClick={(e) => handleClickCreate(e)}
              id="botão-criar"
            >
              Criar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}