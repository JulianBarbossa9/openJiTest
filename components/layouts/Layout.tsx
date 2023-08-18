import { Box } from '@mui/material'
import Head from 'next/head'
import React, { FC } from 'react'
import NavBar from '../ui/Navbar'

interface Props {
  title?: string
  children?: React.ReactNode

}

const Layout = ({ title = 'OpenJira', children } : Props) => {
  return (
    <Box sx={{ flexFlow: 1}}>
      <Head>
        <title>{ title }</title>
      </Head>

      {/* Navbar */}
      <NavBar />
      {/* SideBar */}

      <Box sx={{padding: '10px 20px'}}>
        { children }
      </Box>

    </Box>
  
  )
}

export default Layout