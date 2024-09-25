// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { ptBR } from 'date-fns/locale'
import { format } from 'date-fns'

// ** Ícones do MUI
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PersonIcon from '@mui/icons-material/Person'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useState } from 'react'

const TelaPainel = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [openCalendarModal, setOpenCalendarModal] = useState(false)
  const [openCheckinModal, setOpenCheckinModal] = useState(false)
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);


  // Funções para abrir e fechar o modal de calendário
  const handleCalendarOpen = () => {
    setOpenCalendarModal(true)
  }

  const handleCalendarClose = () => {
    setOpenCalendarModal(false)
  }

  // Função para abrir o modal de Check-in e definir a data
  const handleCheckinClick = () => {
    setCheckinDate(selectedDate)
    setOpenCheckinModal(true)
  }

  const handleCheckinClose = () => {
    setOpenCheckinModal(false)
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* Painel Esquerdo */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {/* Header com Avatar e Boas-vindas */}
            <Grid item xs={12}>
              <Card sx={{ padding: '16px', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                <Avatar
                  sx={{ width: 56, height: 56, mr: 2 }}
                  src='/images/avatars/1.png' // Substituir pelo caminho correto da imagem
                />
                <Box>
                  <Typography variant='h6'>Olá, Teacher Victor</Typography>
                  <Typography variant='body2' color='textSecondary'>
                    Professor de Inglês
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Histórico de Aulas */}
            <Grid item xs={12}>
              <Card
                sx={{
                  background: 'linear-gradient(45deg, #1A73E8, #DC143C)',
                  color: 'white',
                  padding: '24px',
                  borderRadius: '16px'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h5' color='white' sx={{ fontWeight: 'bold' }}>
                      Histórico de aulas
                    </Typography>
                    <Button variant='contained' sx={{ backgroundColor: '#fff', color: '#1A73E8', fontWeight: 'bold' }}>Acessar</Button>
                  </Box>
                  <Typography variant='body1' color='white' sx={{ mt: 2 }}>Setembro de 2024</Typography>
                  <Typography variant='body2' color='white'>12 aulas realizadas</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Calendário e Perfil */}
            <Grid item xs={6}>
              <Card sx={{ background: '#F1F1F1', borderRadius: '10px', textAlign: 'center', padding: '20px', height: '100%' }}>
                <CardContent>
                  <CalendarTodayIcon sx={{ fontSize: 40, color: '#1A73E8', mb: 2 }} />
                  <Typography variant='h6'>Calendário</Typography>
                  <Button variant='contained' sx={{ mt: 2 }} onClick={handleCalendarOpen}>Acessar</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ background: '#F1F1F1', borderRadius: '10px', textAlign: 'center', padding: '20px', height: '100%' }}>
                <CardContent>
                  <PersonIcon sx={{ fontSize: 40, color: '#1A73E8', mb: 2 }} />
                  <Typography variant='h6'>Perfil</Typography>
                  <Button variant='contained' sx={{ mt: 2 }}>Acessar</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Painel Direito - Próximas Aulas com Calendário */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 2 }}>
                Próximas aulas
              </Typography>

              {/* Calendário para escolha de data */}
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
                <DateCalendar
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  sx={{ mb: 3 }}
                />
              </LocalizationProvider>

              {/* Próxima aula agendada */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant='body1'>08:00</Typography>
                <Typography variant='body1'>Confidence Building</Typography>
                <Button variant='contained' sx={{ fontSize: '0.875rem' }} onClick={handleCheckinClick}>
                  Fazer check-in
                </Button>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant='body1'>18:00</Typography>
                <Typography variant='body1'>Apex</Typography>
                <Button variant='contained' sx={{ fontSize: '0.875rem' }} onClick={handleCheckinClick}>
                  Fazer check-in
                </Button>
              </Box>

              {/* Última aula realizada */}
              <Box
                sx={{
                  padding: '20px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                  marginTop: '20px'
                }}
              >
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                  Última aula realizada
                </Typography>
                <Typography variant='body2'>5 de setembro</Typography>
                <Typography variant='body2'>Apex - 10 alunos presentes</Typography>
                <Button variant='contained' sx={{ mt: 2 }}>
                  Ver histórico
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Modal com o calendário */}
      <Dialog open={openCalendarModal} onClose={handleCalendarClose} fullWidth maxWidth="sm">
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DateCalendar
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCalendarClose} color="primary">Fechar</Button>
        </DialogActions>
      </Dialog>

      {/* Modal de Check-in com a data escolhida */}
      <Dialog open={openCheckinModal} onClose={handleCheckinClose} fullWidth maxWidth="sm">
        <DialogContent>
          <Typography variant='h6'>
            Você irá dar aula no dia {checkinDate ? format(checkinDate, 'dd/MM/yyyy') : ''}.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCheckinClose} color="primary">Fechar</Button>
        </DialogActions>
      </Dialog>
    </ApexChartWrapper>
  )
}

export default TelaPainel
