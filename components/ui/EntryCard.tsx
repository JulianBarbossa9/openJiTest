import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, FC, useContext } from 'react'
import { entry } from '../../interfaces'
import { UIContext } from '../../context/ui'
import { EntriesContext } from '../../context/entries'


interface Props {
  entry: entry
}


const EntryCard:FC<Props> = ({ entry }) => {

  const { startDragging, endDragging } = useContext(UIContext)
  
  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id)
    //TODO: The state will be change and show when I made drag
    startDragging()
  }

  const onDragEnd = () => {
    endDragging()
  }

  return (
    <Card
      sx={{ marginBottom: 1}}
      //Drag events
      draggable
      onDragStart = { onDragStart }
      onDragEnd = { onDragEnd }
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace: 'pre-line'}}>{ entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2}}>
          <Typography variant='body2'>30 minutes</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default EntryCard