import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import React, { useContext } from 'react'
import { UIContext } from '../../context/ui'
import NextLink from 'next/link'

const NavBar = () => {
  
  const { openSideMenu } = useContext(UIContext)
  
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          onClick={ openSideMenu }
        >
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref legacyBehavior>
          <Link underline='none' color='white' >
            <Typography variant='h6'>OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar