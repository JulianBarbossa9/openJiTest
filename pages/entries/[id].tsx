import React from 'react'
import Layout from '../../components/layouts/Layout'
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material'
import { statusType } from '../../interfaces'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

const validStatus: statusType[] = ['pending', 'in-progress', 'completed']

const EntryPage = () => {
  return (
    <Layout title='...'>
      <Grid
        container
        justifyContent='center'
        sx={{marginTop: 2}}
      >
        <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
          <Card>
            <CardHeader 
              title='Entry'
              subheader={`Create new entry`}
            />
            <CardContent>
              <TextField 
                sx={{ marginTop: 2, marginBottom: 1}}
                fullWidth
                placeholder='New Entry'
                autoFocus
                multiline
                label='New Entry'
              />

              <FormControl>
                <FormLabel> Status: </FormLabel>
                <RadioGroup
                  row
                >
                  {
                    validStatus.map(option => (
                      <FormControlLabel 
                        key={ option }
                        value={ option }
                        control={ <Radio />}
                        label={ capitalize(option) }
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant='contained'
                fullWidth
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'red'}}
      >
        <DeleteOutlinedIcon />
      </IconButton>


    </Layout>
  )
}

export default EntryPage