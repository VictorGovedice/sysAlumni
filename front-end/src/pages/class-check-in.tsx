import React, { useState, useRef } from 'react';
import { Grid, Box, Typography, Button, Avatar, Card, Checkbox, Divider, Modal, TextField } from '@mui/material';

// Dados de exemplo para alunos agendados
const scheduledStudents = [
  { id: 1, name: 'Felipe Mendes', profilePic: '/images/avatars/5.png', progress: 90, level: 'B2', lessonsCompleted: 42, quizzesCompleted: 12 },
  { id: 2, name: 'Estela Almeida', profilePic: '/images/avatars/2.png', progress: 85, level: 'C1', lessonsCompleted: 35, quizzesCompleted: 10 },
  { id: 3, name: 'Evelyn Oliveira', profilePic: '/images/avatars/3.png', progress: 70, level: 'B1', lessonsCompleted: 30, quizzesCompleted: 8 },
  { id: 4, name: 'Marcelo Oliver', profilePic: '/images/avatars/4.png', progress: 60, level: 'A2', lessonsCompleted: 28, quizzesCompleted: 6 },
];

const CheckInPage = () => {
  const [checkedStudents, setCheckedStudents] = useState({});
  const [selectedStudent, setSelectedStudent] = useState(scheduledStudents[0]); // Aluno inicial no perfil
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [openCameraModal, setOpenCameraModal] = useState(false); // Modal para a câmera
  const [comment, setComment] = useState('');
  const [studentComments, setStudentComments] = useState({}); // Armazena os comentários de cada aluno
  const localVideoRef = useRef(null);

  // Função para alternar o check dos alunos
  const handleCheck = (id) => {
    setCheckedStudents({
      ...checkedStudents,
      [id]: !checkedStudents[id],
    });
  };

  // Função para selecionar aluno e atualizar o perfil na sidebar
  const handleViewProfile = (student) => {
    setSelectedStudent(student);
  };

  // Função para abrir modal de comentários
  const handleOpenCommentModal = (student) => {
    setSelectedStudent(student);
    setOpenCommentModal(true);
  };

  // Função para salvar comentário
  const handleSaveComment = () => {
    setStudentComments({
      ...studentComments,
      [selectedStudent.id]: comment,
    });
    setComment('');
    setOpenCommentModal(false);
  };

  // Função para abrir a câmera do dispositivo no modal
  const handleOpenCameraModal = async () => {
    setOpenCameraModal(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Erro ao acessar a câmera: ', error);
    }
  };

  // Função para fechar o modal da câmera e parar o vídeo
  const handleCloseCameraModal = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    setOpenCameraModal(false);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Título e detalhes da aula */}
      <Typography variant="h4" sx={{ mb: 2 }}>
        Check-in de aula
      </Typography>

      {/* Seção de detalhes da aula */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Confidence Building
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body1">
                <strong>4 alunos agendados</strong> · 1 hora
              </Typography>
              <Box>
                <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleOpenCameraModal}>
                  Iniciar Chamada de Vídeo
                </Button>
                <Button variant="contained" color="secondary">
                  Acessar material
                </Button>
              </Box>
            </Box>

            {/* Informações do professor */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar src="/images/avatars/1.png" sx={{ width: 50, height: 50, mr: 2 }} />
              <Box>
                <Typography variant="body1">
                  <strong>Teddy</strong> <br />
                  20 de setembro · 08h00
                </Typography>
                <Button variant="text" color="error">
                  cancelar aula
                </Button>
              </Box>
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* Descrição do tema */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Descrevendo Pessoas e Personalidades
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Nesta aula, vamos explorar como descrever pessoas usando uma variedade de adjetivos e frases comuns.
              </Typography>
            </Box>

            {/* Lista de alunos agendados */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Alunos agendados
            </Typography>
            <Grid container spacing={2}>
              {scheduledStudents.map((student) => (
                <Grid item xs={12} key={student.id}>
                  <Card sx={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
                    <Checkbox
                      checked={checkedStudents[student.id] || false}
                      onChange={() => handleCheck(student.id)}
                    />
                    <Avatar src={student.profilePic} sx={{ width: 50, height: 50, mr: 2 }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1">{student.name}</Typography>
                      <Button variant="text" color="primary" sx={{ mr: 2 }} onClick={() => handleViewProfile(student)}>
                        ver perfil
                      </Button>
                      <Button variant="text" color="secondary" onClick={() => handleOpenCommentModal(student)}>
                        comentar
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Button variant="contained" color="primary" fullWidth>
                Salvar aula
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Sidebar do perfil do aluno */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: '20px' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Perfil de aluno
            </Typography>
            <Avatar src={selectedStudent.profilePic} sx={{ width: 100, height: 100, mb: 2 }} />
            <Typography variant="body1">{selectedStudent.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              aluna desde janeiro 2024
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Progresso do aluno */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2">Confidence Building</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  Progresso
                </Typography>
                <Box sx={{ flexGrow: 1, backgroundColor: '#e0e0e0', height: '8px', borderRadius: '4px' }}>
                  <Box
                    sx={{
                      width: `${selectedStudent.progress}%`,
                      backgroundColor: '#1976d2',
                      height: '100%',
                      borderRadius: '4px',
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {selectedStudent.progress}%
                </Typography>
              </Box>
            </Box>

            {/* Informações adicionais */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2">Último teste de nivelamento: {selectedStudent.level}</Typography>
              <Typography variant="body2">Aulas realizadas: {selectedStudent.lessonsCompleted}</Typography>
              <Typography variant="body2">Quiz realizados: {selectedStudent.quizzesCompleted} concluídos</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Histórico de aulas */}
            <Typography variant="h6" sx={{ mb: 1 }}>
              Histórico de aulas
            </Typography>
            <Box>
              <Typography variant="body2">Confidence Building</Typography>
              <Typography variant="caption" color="textSecondary">
                09/09/2024 · 08h00
              </Typography>
              <Typography variant="body2">Engajamento: alto</Typography>
            </Box>

            {/* Exibir comentários se houver */}
            {studentComments[selectedStudent.id] && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  Comentário:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {studentComments[selectedStudent.id]}
                </Typography>
              </Box>
            )}
          </Card>
        </Grid>
      </Grid>

      {/* Modal para comentários */}
      <Modal open={openCommentModal} onClose={() => setOpenCommentModal(false)}>
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
          <Typography variant="h6" sx={{ mb: 2 }}>
            Comentar para {selectedStudent.name}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            label="Escreva seu comentário"
          />
          <Button variant="contained" color="primary" onClick={handleSaveComment} sx={{ mt: 2 }}>
            Inserir
          </Button>
        </Box>
      </Modal>

      {/* Modal para câmera */}
      <Modal open={openCameraModal} onClose={handleCloseCameraModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <video ref={localVideoRef} autoPlay playsInline width="100%" height="100%" style={{ borderRadius: '8px' }} />
          <Button variant="contained" color="secondary" onClick={handleCloseCameraModal} sx={{ mt: 2 }}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default CheckInPage;
