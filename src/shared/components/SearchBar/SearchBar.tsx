import { Paper, IconButton, InputBase } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ISearchBarProps {
  children: React.ReactNode
}

export const SearchBar: React.FC<ISearchBarProps> = ({ children }) => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm.length < 2) {
      return setError('Verifique se a busca tem no mínimo 2 caracteres.')
    }
    navigate(`/search/${searchTerm}`)
  }

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',

          alignItems: 'center',
          width: 'auto',
          my: '1rem'
        }}
        onSubmit={handleSubmit}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value={searchTerm}
          aria-label="Pesquisar música ou artista"
          onChange={e => {
            setSearchTerm(e.target.value)
          }}
          placeholder="Pesquisar..."
          error={!!error}
          onBlur={() => setError('')}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <Search />
        </IconButton>
        {error && (
          <span
            aria-label="Mensagem de erro"
            style={{
              position: 'absolute',
              top: 0,
              color: 'red',
              fontSize: '1rem'
            }}
          >
            {error}
          </span>
        )}
      </Paper>
      {children}
    </>
  )
}
