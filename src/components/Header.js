import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import FormProduct from './FormProduct';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';

function Header({ search, setSearch }) {
    const [openForm, setOpenForm] = useState(false)
    const router = useRouter()
    const logout = () => {
        window.localStorage.removeItem("token")
        router.push('/')
    }

    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6} sm={4}>
                <TextField
                    size='small'
                    fullWidth
                    placeholder='Procure um modelo'
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </Grid>
            <Grid item>
                <Button variant="contained" onClick={() => setOpenForm(true)} >Criar produto</Button>
                <IconButton
                    onClick={logout}
                >
                    <LogoutIcon />
                </IconButton>
            </Grid>
            
            <FormProduct open={openForm} handleClose={() => setOpenForm(false)} />
        </Grid>
    )
}

export default Header