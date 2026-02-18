import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  CircularProgress,
  Alert,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material'
import UserTable from './components/UserTable'
import './App.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
})

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:8080/api/users')
      setUsers(response.data)
      setError(null)
    } catch (err) {
      setError('ไม่สามารถดึงข้อมูลผู้ใช้ได้ กรุณาลองใหม่อีกครั้ง')
      console.error('Error fetching users:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = () => {
    fetchUsers()
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: 'primary.main',
                fontWeight: 600
              }}
            >
              ระบบจัดการผู้ใช้
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ mb: 4 }}
            >
              แสดงรายชื่อผู้ใช้จากฐานข้อมูล
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                </svg>
              }
              onClick={handleRefresh}
              sx={{ 
                px: 4, 
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                borderRadius: 2
              }}
            >
              รีเฟรชข้อมูล
            </Button>
          </Box>

          {/* Main Content */}
          <Paper 
            elevation={3}
            sx={{ 
              p: { xs: 2, md: 4 },
              borderRadius: 3,
              overflow: 'hidden'
            }}
          >
            {/* Table Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography 
                variant="h4" 
                component="h2"
                sx={{ 
                  fontWeight: 600,
                  color: 'text.primary'
                }}
              >
                รายชื่อผู้ใช้ทั้งหมด ({users.length} คน)
              </Typography>
              {users.length > 0 && (
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" sx={{ mr: 1 }}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    ข้อมูลล่าสุด
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Table Content */}
            <UserTable users={users} loading={loading} error={error} />
          </Paper>

          {/* Footer */}
          <Box sx={{ textAlign: 'center', mt: 6, color: 'text.secondary' }}>
            <Typography variant="body2">
              © 2026 User Management System | Powered by React & Spring Boot
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
