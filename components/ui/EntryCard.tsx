import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, FC, useContext } from 'react'
import { entry } from '../../interfaces'
import { UIContext } from '../../context/ui'
import { EntriesContext } from '../../context/entries'
import { useRouter } from 'next/router'
import { dateFunction } from '../../utils'


interface Props {
  entry: entry
}


const EntryCard:FC<Props> = ({ entry }) => {
  
  const { startDragging, endDragging } = useContext(UIContext)
  const router = useRouter()
  
  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id)
    //TODO: The state will be change and show when I made drag
    startDragging()
  }

  const onDragEnd = () => {
    endDragging()
  }


  const onClickCard = () => {
    router.push(`/entries/${entry._id}`)
  }

  return (
    <Card
      onClick={ onClickCard }
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
          <Typography variant='body2'>{ dateFunction.getFormatDistanceToNow(entry.createdAt)}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default EntryCard