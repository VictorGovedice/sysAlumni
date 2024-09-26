import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const StudentsPage = () => {
  // Sample student data (can be replaced by real data from API)
  const studentsData = [
    {
      name: 'Estela Silva',
      course: 'Confidence Building',
      engagement: 'High Engagement',
      joinDate: 'January 24, 2024',
      age: 22,
      profilePic: '/images/avatars/2.png',
    },
    {
      name: 'Evelyn Costa',
      course: 'Confidence Building',
      engagement: 'High Engagement',
      joinDate: 'January 24, 2024',
      age: 30,
      profilePic: '/images/avatars/3.png',
    },
    {
      name: 'Marcelo Amorin',
      course: 'Confidence Building',
      engagement: 'High Engagement',
      joinDate: 'January 24, 2024',
      age: 28,
      profilePic: '/images/avatars/4.png',
    },
    {
      name: 'Felipe Harlen',
      course: 'Confidence Building',
      engagement: 'High Engagement',
      joinDate: 'January 24, 2024',
      age: 26,
      profilePic: '/images/avatars/5.png',
    },
  ];

  // State for search query, profile modal, comment modal, and selected student
  const [searchQuery, setSearchQuery] = useState('');
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Filtered students based on search query
  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to open the profile modal and set the selected student
  const handleOpenProfileModal = (student) => {
    setSelectedStudent(student);
    setOpenProfileModal(true);
  };

  // Function to open the comment modal and set the selected student
  const handleOpenCommentModal = (student) => {
    setSelectedStudent(student);
    setOpenCommentModal(true);
  };

  // Function to close modals
  const handleCloseModal = () => {
    setOpenProfileModal(false);
    setOpenCommentModal(false);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Grid container spacing={6} sx={{ flexGrow: 1 }}>
        {/* Search and Filter Panel */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <input
              type="text"
              placeholder="Search student"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                width: '60%',
                fontSize: '1rem',
              }}
            />
            <Box>
              <Typography variant="body1" sx={{ display: 'inline', mr: 2 }}>
                Filter by:
              </Typography>
              <Chip label="Engagement" color="primary" />
            </Box>
          </Box>
        </Grid>

        {/* Recent Students */}
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Recent Students
          </Typography>
          <Grid container spacing={4}>
            {filteredStudents.map((student, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Avatar
                        alt={student.name}
                        src={student.profilePic}
                        sx={{ width: 80, height: 80, mb: 2 }}
                      />
                      <Typography variant="h6">{student.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {student.course}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {student.engagement}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Chip
                          label="View Profile"
                          color="primary"
                          sx={{ mr: 1 }}
                          onClick={() => handleOpenProfileModal(student)}
                        />
                        <Chip
                          label="Comment"
                          color="secondary"
                          onClick={() => handleOpenCommentModal(student)}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* All Students */}
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            All Students
          </Typography>
          <Grid container spacing={4}>
            {filteredStudents.map((student, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Avatar
                        alt={student.name}
                        src={student.profilePic}
                        sx={{ width: 80, height: 80, mb: 2 }}
                      />
                      <Typography variant="h6">{student.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {student.course}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {student.engagement}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Chip
                          label="View Profile"
                          color="primary"
                          sx={{ mr: 1 }}
                          onClick={() => handleOpenProfileModal(student)}
                        />
                        <Chip
                          label="Comment"
                          color="secondary"
                          onClick={() => handleOpenCommentModal(student)}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Profile Modal */}
        <Modal
          open={openProfileModal}
          onClose={handleCloseModal}
          aria-labelledby="profile-modal-title"
        >
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
            {selectedStudent && (
              <>
                <Typography id="profile-modal-title" variant="h6" component="h2">
                  {selectedStudent.name}'s Profile
                </Typography>
                <Typography sx={{ mt: 2 }}>Course: {selectedStudent.course}</Typography>
                <Typography sx={{ mt: 2 }}>Age: {selectedStudent.age}</Typography>
                <Typography sx={{ mt: 2 }}>Joined: {selectedStudent.joinDate}</Typography>
              </>
            )}
            <Button onClick={handleCloseModal} sx={{ mt: 2 }} variant="contained">
              Close
            </Button>
          </Box>
        </Modal>

        {/* Comment Modal */}
        <Modal
          open={openCommentModal}
          onClose={handleCloseModal}
          aria-labelledby="comment-modal-title"
        >
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
            <Typography id="comment-modal-title" variant="h6" component="h2">
              Comments for {selectedStudent?.name}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {selectedStudent?.name} completed the proficiency test and scored 9.5. We need to
              focus more on their conversation skills.
            </Typography>
            <Button onClick={handleCloseModal} sx={{ mt: 2 }} variant="contained">
              Close
            </Button>
          </Box>
        </Modal>
      </Grid>
    </Box>
  );
};

export default StudentsPage;
