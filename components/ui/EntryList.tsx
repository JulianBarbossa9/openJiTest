import { List, Paper } from '@mui/material'
import React, { FC, useContext } from 'react'
import EntryCard from './EntryCard'
import { statusType } from '../../interfaces'
import { EntriesContext } from '../../context/entries'

interface Props {
  status: statusType
}

const EntryList:FC<Props> = ({ status }) => {
  // console.log(status)
  
  const { entries } = useContext( EntriesContext)
  
  const entriesByStatus = entries.filter(entrie => entrie.status === status)
  console.log(entriesByStatus)

  return (
    //Here we will drop
    <div>
      <Paper sx={{ height: 'calc(100vh - 250px)', overflowX: 'hidden', background: 'transparent', padding: 1}}>
        {/* TODO: Change the style if I'm doing the drag */}
        <List sx={{ opacity: 1}}>
          {
            entriesByStatus.map( data => (
              <EntryCard key={data._id} entry={data}/>
            ))
          }
        </List>

      </Paper>
    </div>
  )
}

export default EntryList