import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Avatar,
  Chip,
  Box,
  Typography
} from '@mui/material'
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Badge as BadgeIcon
} from '@mui/icons-material'

const UserTable = ({ users, loading, error }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8 }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} thickness={4} />
          <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
            กำลังโหลดข้อมูล...
          </Typography>
        </Box>
      </Box>
    )
  }

  if (error) {
    return (
      <Alert 
        severity="error" 
        sx={{ 
          mb: 3,
          borderRadius: 2,
          '& .MuiAlert-message': {
            fontSize: '1rem'
          }
        }}
      >
        <Typography variant="body1" component="div">
          <strong>เกิดข้อผิดพลาด!</strong>
          <br />
          {error}
        </Typography>
      </Alert>
    )
  }

  if (users.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <PersonIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" color="text.secondary" gutterBottom>
          ไม่พบข้อมูลผู้ใช้
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ไม่มีรายชื่อผู้ใช้ในระบบในขณะนี้
        </Typography>
      </Box>
    )
  }

  return (
    <TableContainer 
      component={Paper} 
      elevation={0}
      sx={{ 
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ bgcolor: 'grey.50' }}>
            <TableCell 
              sx={{ 
                fontWeight: 600, 
                fontSize: '0.875rem',
                color: 'text.primary',
                borderBottom: '2px solid',
                borderColor: 'divider'
              }}
            >
              ผู้ใช้
            </TableCell>
            <TableCell 
              sx={{ 
                fontWeight: 600, 
                fontSize: '0.875rem',
                color: 'text.primary',
                borderBottom: '2px solid',
                borderColor: 'divider'
              }}
            >
              รหัสผู้ใช้
            </TableCell>
            <TableCell 
              sx={{ 
                fontWeight: 600, 
                fontSize: '0.875rem',
                color: 'text.primary',
                borderBottom: '2px solid',
                borderColor: 'divider'
              }}
            >
              อีเมล
            </TableCell>
            <TableCell 
              sx={{ 
                fontWeight: 600, 
                fontSize: '0.875rem',
                color: 'text.primary',
                borderBottom: '2px solid',
                borderColor: 'divider'
              }}
              align="center"
            >
              สถานะ
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow 
              key={user.id}
              sx={{ 
                '&:hover': { bgcolor: 'action.hover' },
                '&:last-child td, &:last-child th': { border: 0 },
                transition: 'background-color 0.2s ease-in-out'
              }}
            >
              <TableCell sx={{ py: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    sx={{ 
                      mr: 2,
                      bgcolor: `hsl(${(index * 137) % 360}, 70%, 50%)`,
                      width: 48,
                      height: 48,
                      fontSize: '1.2rem',
                      fontWeight: 600
                    }}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontWeight: 500,
                        color: 'text.primary',
                        fontSize: '0.95rem'
                      }}
                    >
                      {user.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontSize: '0.85rem' }}
                    >
                      ผู้ใช้ระบบ
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <BadgeIcon sx={{ mr: 1, fontSize: 20, color: 'text.secondary' }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'monospace',
                      color: 'text.primary',
                      fontWeight: 500
                    }}
                  >
                    #{user.id.toString().padStart(6, '0')}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 1, fontSize: 20, color: 'text.secondary' }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.primary',
                      textDecoration: 'none'
                    }}
                  >
                    {user.email}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Chip 
                  label="Active" 
                  color="success" 
                  variant="outlined"
                  size="small"
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '0.75rem'
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserTable
