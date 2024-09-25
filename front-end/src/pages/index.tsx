// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import TotalEarning from 'src/views/dashboard/TotalEarning'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={5}>
      <TotalEarning />
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
