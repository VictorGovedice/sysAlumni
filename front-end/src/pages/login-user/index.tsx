import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Checkbox, FormControlLabel, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import BlankLayout from 'src/@core/layouts/BlankLayout';
import Image from 'next/image';
import { Box } from '@mui/material';

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Controle da visibilidade da senha
  const [error, setError] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('rememberMeUsername');
    const savedPassword = localStorage.getItem('rememberMePassword');
    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = () => {
    if (username === 'TeacherAlumni' && password === '123') {
      localStorage.setItem('authToken', 'userAuthenticated');
      
      if (rememberMe) {
        localStorage.setItem('rememberMeUsername', username);
        localStorage.setItem('rememberMePassword', password);
      } else {
        localStorage.removeItem('rememberMeUsername');
        localStorage.removeItem('rememberMePassword');
      }

      router.push('/');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  // Função para detectar a tecla Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: 'url("/images/background/teacher-alumni.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de sobreposição com opacidade
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fundo branco com transparência
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2, // Coloca o conteúdo acima da sobreposição
        }}
      >
        {/* Logo da Alumni */}
        <Box mb={4}>
          <Image
            src="/images/logos/alumni_logo-blue.png"
            alt="Alumni Logo"
            width={120}
            height={40}
          />
        </Box>

        {/* Título */}
        <Typography variant="h5" gutterBottom>
          Painel do Professor
        </Typography>

        {/* Campos de login */}
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}  // Altera o tipo com base no estado
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {error && <Typography color="error">{error}</Typography>}

        {/* Checkbox de lembrar acesso */}
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          }
          label="Remember my login"
        />

        {/* Botão de login */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            marginTop: 2,
            background: 'linear-gradient(90deg, #0517ce, #e62434)', // Gradiente no botão
            color: 'white',
            height: '50px',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              opacity: 0.9,
              background: 'linear-gradient(90deg, #0517ce, #e62434)', // Manter o gradiente no hover
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

LoginPage.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default LoginPage;
