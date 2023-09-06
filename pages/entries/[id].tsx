import React, { ChangeEvent, FC, useContext, useMemo, useState } from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../../components/layouts/Layout'
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material'
import { entry, statusType } from '../../interfaces'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { isValidObjectId } from 'mongoose'
import { dbEntris } from '../../database'
import { EntriesContext } from '../../context/entries'
import entries from '../api/entries'
import { useRouter } from 'next/router'

const validStatus: statusType[] = ['pending', 'in-progress', 'completed']


interface Props {
  returnEntry: entry
}

const EntryPage:FC<Props> = ( { returnEntry } ) => {
  
  console.log({ returnEntry })

  const { updateEntry, deleteEntry } = useContext(EntriesContext)
  
  const [ inputValue, setInputValue ] = useState(returnEntry.description)
  const [ status, setStatus ] = useState<statusType>(returnEntry.status)
  const [ isTouched, setIsTouched ] = useState(false)

  const onInputValueChanged = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  
  const onStatusChanged = (event:ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as statusType)
  }

  const router = useRouter()

  const onSave = () => {
    if (inputValue.trim().length === 0) return 0
    
    //set the entry to update
    const updatedEntry: entry = {
      ...returnEntry,
      status: status,
      description: inputValue
    }

    updateEntry(updatedEntry, true)
  }

  const handleDelete = () => {
    deleteEntry(returnEntry._id, true)
    router.push('/')
  }
  
  const isNotValid = useMemo( () => 
    inputValue.length <= 0 && isTouched
  ,[inputValue, isTouched])
  
  
  
  return (
    <Layout title={inputValue.substring(0.20) + '...'}>
      <Grid
        container
        justifyContent='center'
        sx={{marginTop: 2}}
      >
        <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
          <Card>
            <CardHeader 
              title={`Entry :`}
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
                value={ inputValue }
                onBlur={ () => setIsTouched(true)}
                onChange={ onInputValueChanged }
                helperText= { isNotValid && 'Add a input' }
                error= { isNotValid }
              />

              <FormControl>
                <FormLabel> Status: </FormLabel>
                <RadioGroup
                  row
                  value={ status }
                  onChange={ onStatusChanged }
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
                onClick={ onSave }
                disabled={ inputValue.length <= 0 ? true : false }
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'red'}}
        onClick ={ handleDelete }
      >
        <DeleteOutlinedIcon />
      </IconButton>


    </Layout>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params}) => {
  
 const { id } = params as {id : string}

 const returnEntry = await dbEntris.getEntryById(id)

 //with this we remove the user if the id does not exist
 //  if (!isValidObjectId(id)){
 //   return {
 //     redirect:{
 //       destination: '/',
 //       permanent: false
 //     }
 //   }
 //  }
 //If returnentry comes empty redicect to home
 if (!returnEntry){
  return {
    redirect:{
      destination: '/',
      permanent: false
    }
  }
 }

  return {
    //This props will return in this component
    props: {
      returnEntry: returnEntry
    }
  }
}

export default EntryPage