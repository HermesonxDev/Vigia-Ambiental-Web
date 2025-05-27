import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './hooks/theme.tsx'
import { Back4AppProvider } from './hooks/back4app.tsx'
import { LogProvider } from './hooks/log.tsx'
import Parse from './config/parseConfig.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogProvider>
      <Back4AppProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Back4AppProvider>
    </LogProvider>
  </StrictMode>,
)
