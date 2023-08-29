import type { NextPage } from 'next' 
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import Layout from '../components/layouts/Layout'
import EntryList from '../components/ui/EntryList'
import NewEntry from '../components/ui/NewEntry'


const Home: NextPage = () => {
  
  // console.log(process.env.NEXT_PUBLIC_CLIENT_KEY_NEXT)
  
  return (
   <>
    <Layout title='Home - OpenJira'>

      <Grid container spacing={2}>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Pending' />
            {/* Add new task */}
            {/* show all task */}
            <NewEntry />
            <EntryList status='pending'/>

          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title='In Progress' />
            
            <EntryList status='in-progress'/>


          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Completed' />

            <EntryList status='completed'/>


          </Card>
        </Grid>


      </Grid>

    </Layout>
   </>
  )
}

export default Home
