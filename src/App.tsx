import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { useTheme } from './hooks/theme'
import Routes from './routes'
import { useLog } from './hooks/log'
import NotificationBox from './components/NotificationBox'

function App() {

  const { theme } = useTheme()
  const { notificationContent, showNotification } = useLog()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />

      {showNotification.error && <NotificationBox data={notificationContent} type="warning"/> }
      {showNotification.email && <NotificationBox data={notificationContent} type="email"/> }
      {showNotification.update && <NotificationBox data={notificationContent} type="update"/> }
      {showNotification.success && <NotificationBox data={notificationContent} type="success"/> }
    </ThemeProvider>
  )
}

export default App
