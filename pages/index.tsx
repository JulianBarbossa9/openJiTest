import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/layouts/Layout'


const Home: NextPage = () => {
  return (
   <>
    <Layout title='hey world'>
      <Typography variant='h1' color={'primary'}>Hello</Typography>
    </Layout>
   </>
  )
}

export default Home
