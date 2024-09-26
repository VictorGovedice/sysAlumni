import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importar o locale em Português

// Dados de exemplo para agendamentos
const appointmentsData = {
  '2024-09-16': [
    { time: '08:00 - 08:45', course: 'Confidence Building', students: 5 },
    { time: '18:00 - 18:45', course: 'Apex', students: 2 },
  ],
  '2024-09-17': [
    { time: '08:00 - 08:45', course: 'Confidence Building', students: 5 },
  ],
  '2024-09-18': [
    { time: '08:00 - 08:45', course: 'Confidence Building', students: 5 },
    { time: '16:00 - 16:45', course: 'Advanced Speaking', students: 3 },
  ],
  '2024-09-19': [
    { time: '10:00 - 10:45', course: 'Grammar Mastery', students: 4 },
  ],
  '2024-09-20': [
    { time: '14:00 - 14:45', course: 'Pronunciation Practice', students: 6 },
  ],
  '2024-09-21': [
    { time: '09:00 - 09:45', course: 'Confidence Building', students: 5 },
  ],
  '2024-09-22': [
    { time: '18:00 - 18:45', course: 'Apex', students: 2 },
  ],
  // Adicione mais dias com aulas para preencher o calendário
};

const SchedulePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tabValue, setTabValue] = useState(0);

  // Função para abrir o modal
  const handleOpenModal = (session) => {
    setModalContent(session);
    setOpenModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent(null);
  };

  // Função para formatar a data para corresponder aos dados de agendamento
  const formatDate = (date) => moment(date).format('YYYY-MM-DD');

  // Obter agendamentos para a data selecionada
  const appointmentsForDate = appointmentsData[formatDate(selectedDate)] || [];

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Agendamentos
      </Typography>

      {/* Navegação entre Aulas Agendadas e Histórico */}
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Aulas agendadas" />
        <Tab label="Histórico de agendamentos" />
      </Tabs>

      {tabValue === 0 && (
        <>
          {/* Calendário real com largura total */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              width: '100%',
              '.react-calendar': {
                width: '100%',
                maxWidth: '1200px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: '1px solid #ddd',
                padding: '20px',
              },
              '.react-calendar__tile': {
                maxWidth: 'initial',
              },
            }}
          >
            <Calendar
              locale="pt-BR"
              onChange={setSelectedDate}
              value={selectedDate}
              tileContent={({ date }) => {
                const hasAppointments = appointmentsData[formatDate(date)];
                return hasAppointments ? (
                  <Box
                    sx={{
                      backgroundColor: '#1976d2',
                      borderRadius: '50%',
                      height: '10px',
                      width: '10px',
                      margin: 'auto',
                    }}
                  />
                ) : null;
              }}
            />
          </Box>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            {appointmentsForDate.length > 0 ? (
              appointmentsForDate.map((session, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {session.time}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Curso: {session.course}
                        <br />
                        Alunos agendados: {session.students}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ mr: 1 }}
                          onClick={() => handleOpenModal(session)}
                        >
                          Fazer check-in
                        </Button>
                        <Button variant="text" color="secondary">
                          Cancelar aula
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" sx={{ mt: 4 }}>
                Não há agendamentos para esta data.
              </Typography>
            )}
          </Grid>
        </>
      )}

      {tabValue === 1 && (
        <Typography variant="body1" sx={{ mt: 4 }}>
          Histórico de agendamentos ainda não implementado.
        </Typography>
      )}

      {/* Modal para check-in */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {modalContent && (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Check-in para {modalContent.course}
              </Typography>
              <Typography variant="body1">
                Horário: {modalContent.time}
              </Typography>
              <Typography variant="body1">
                Número de alunos: {modalContent.students}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseModal}
                sx={{ mt: 3 }}
              >
                Confirmar Check-in
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default SchedulePage;
