import React from 'react'
import Orange from '../../../assets/images/orange.png'
import { AppBar, Avatar, Toolbar } from '@mui/material'
import { Box } from '@mui/system'


const Header = () => {
    return (
        <AppBar color='primary'>
            <Toolbar>
                <Box sx={{ minWidth: '200px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar src={Orange} variant='square' sx={{ marginRight: '16px' }} />
                    <h2>Orange Notes</h2>
                </Box>
                <Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header