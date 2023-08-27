import { List, Paper } from '@mui/material'
import React, { DragEvent, FC, useContext, useMemo } from 'react'
import EntryCard from './EntryCard'
import { statusType } from '../../interfaces'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'
import style from './EntryList.module.css'

interface Props {
  status: statusType
}

const EntryList:FC<Props> = ({ status }) => {
  // console.log(status)
  
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, endDragging } = useContext(UIContext)
  
  const entriesByStatus = useMemo( () =>
    entries.filter(entrie => entrie.status === status)
  ,[entries])
  
  const onDropEntry = (event: DragEvent) => {
    const id = event.dataTransfer.getData('text')
    console.log(id)
    const entry = entries.find(entry => entry._id == id)!
    entry.status = status
    updateEntry(entry)
    endDragging()
  }

  const allowDrop = (event: DragEvent) => {
    event.preventDefault()
  }
  
  
  return (
    //Here we will drop
    <div
      onDrop={ onDropEntry } 
      onDragOver={ allowDrop }
      className={ isDragging ? style.draggin : ''}
    >
      <Paper sx={{ height: 'calc(100vh - 250px)', overflowX: 'hidden', background: 'transparent', padding: 1}}>
        {/* TODO: Change the style if I'm doing the drag */}
        <List sx={{ opacity: isDragging ? 0.2 : 1,  transition: 'all .3s'}}>
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