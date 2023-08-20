import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC } from 'react'
import { entry } from '../../interfaces'


interface Props {
  entry: entry
}


const EntryCard:FC<Props> = ({ entry }) => {
  return (
    <Card
      sx={{ marginBottom: 1}}
      //Drag events
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