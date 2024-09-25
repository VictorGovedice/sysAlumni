import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableCell'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

const TeacherProfile = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Grid container spacing={6} sx={{ flexGrow: 1 }}>
        {/* Painel Esquerdo */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              {/* Perfil do Professor */}
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 4 }}>
                <Avatar
                  alt="Teacher Profile"
                  src="/images/avatars/1.png" // Substituir pelo caminho da imagem correta
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h5">Victor Govedice</Typography>
                <Typography variant="body1" color="textSecondary">
                  Professor desde janeiro de 2024
                </Typography>
              </Box>
              <Divider />
              {/* Aulas Realizadas e Valor */}
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box component="span" sx={{ mr: 1, fontSize: '1.5rem' }}>⏱</Box> 36 aulas realizadas
                </Typography>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box component="span" sx={{ mr: 1, fontSize: '1.5rem' }}>💵</Box> Valor hora aula: R$ 95,00
                </Typography>
              </Box>
              <Divider />
              {/* Disponibilidade */}
              <Box sx={{ mt: 3 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Disponibilidade</Typography>
                <Typography variant="body1">Segunda-feira: 08:00 - 12:00, 18:00 - 20:00</Typography>
                <Typography variant="body1">Terça-feira: 08:00 - 12:00</Typography>
                <Chip label="Ativa" color="success" sx={{ mt: 2, fontSize: '1.1rem', padding: '8px 16px' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Painel Direito */}
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              {/* Atividade Gráfico (Placeholder) */}
              <Typography variant="h5">Atividade</Typography>
              <Box sx={{ mt: 3, mb: 3 }}>
                {/* Gráfico Exemplo ou Componente Placeholder */}
                <Typography variant="body1">Gráfico de Aulas Realizadas</Typography>
              </Box>
              <Divider />
              {/* Histórico de Aulas */}
              <Typography variant="h5" sx={{ mt: 3, mb: 3 }}>Histórico de aulas</Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ padding: '10px' }}>05/08/2024, 08:00</TableCell>
                      <TableCell sx={{ padding: '10px' }}>Confidence Building</TableCell>
                      <TableCell sx={{ padding: '10px' }}>Nome do tema</TableCell>
                      <TableCell sx={{ padding: '10px', textAlign: 'center' }}>
                        <Chip label="Realizada" color="success" sx={{ fontSize: '1rem', padding: '8px 16px' }} />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: '10px' }}>05/08/2024, 08:00</TableCell>
                      <TableCell sx={{ padding: '10px' }}>Confidence Building</TableCell>
                      <TableCell sx={{ padding: '10px' }}>Nome do tema</TableCell>
                      <TableCell sx={{ padding: '10px', textAlign: 'center' }}>
                        <Chip label="Realizada" color="success" sx={{ fontSize: '1rem', padding: '8px 16px' }} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TeacherProfile
