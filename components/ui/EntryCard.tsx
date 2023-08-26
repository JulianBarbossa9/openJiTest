import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, FC } from 'react'
import { entry } from '../../interfaces'


interface Props {
  entry: entry
}


const EntryCard:FC<Props> = ({ entry }) => {
  
  const onDragStart = (event: DragEvent) => {
    console.log(event)
    event.dataTransfer.setData('text', entry._id)
    //TODO: The state will be change and show when I made drag
  }

  const onDragEnd = () => {

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