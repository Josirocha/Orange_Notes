import React from 'react'
import { Box, Typography } from '@mui/material'
import CreateCategory from '../../Components/CreateCategory/CreateCategory'


const Categorias = () => {
    return (
        <>
            <Typography variant='h3' sx={{ my: 2 }}>
                Categorias
            </Typography>
            <Typography variant='p'>
                Selecione uma categoria para suas notas ou crie uma nova.
            </Typography>
            <Box sx={{ py: 2 }}>
                <CreateCategory/>
            </Box>

        </>
    )
}

export default Categorias