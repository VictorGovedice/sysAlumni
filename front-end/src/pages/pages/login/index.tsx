import { useRouter } from 'next/router';
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'RaphaelAlumni' && password === 'Ruiz@123') {
      localStorage.setItem('authToken', 'userAuthenticated');
      router.push('/');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box p={5} border="1px solid #ccc" borderRadius="8px">
        <Typography variant="h5" gutterBottom>
          Painel do Aluno
        </Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
