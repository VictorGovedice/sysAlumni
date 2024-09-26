// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import AccountTieOutline from 'mdi-material-ui/AccountTieOutline' // New icon for "Perfil do Professor"
import AccountGroupOutline from 'mdi-material-ui/AccountGroupOutline' // New icon for "Alunos"
import CalendarOutline from 'mdi-material-ui/CalendarOutline' // New icon for "Agendamentos"
import CheckCircleOutline from 'mdi-material-ui/CheckCircleOutline' // New icon for "Check-in de Aulas"

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Perfil do Professor',
      icon: AccountTieOutline, // Updated icon for "Perfil do Professor"
      path: '/teacher-profile'
    },
    {
      title: 'Alunos',
      icon: AccountGroupOutline, // Updated icon for "Alunos"
      path: '/students'
    },
    {
      title: 'Agendamentos',
      icon: CalendarOutline, // Updated icon for "Agendamentos"
      path: '/appointments'
    },
    {
      title: 'Check-in de Aulas',
      icon: CheckCircleOutline, // New icon for "Check-in de Aulas"
      path: '/class-check-in'
    },
    {
      title: 'Dados da conta',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages Pagamentos'
    },
    {
      title: 'Dados de pagamento',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Perfil acadêmico',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
