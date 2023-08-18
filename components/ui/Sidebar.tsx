import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const menuItems: string[] = ['Inbox','Started', 'Send Email', 'Drafts']

const Sidebar = () => {
  return (
    <Drawer 
      anchor='left'
      open={true}
      onClose={() => console.log('close')}

    >
      <Box sx={{width: 250}}>

        <Box 
          sx={{padding: '5px 10px'}}
        >
          <Typography variant='h4'>
            Menú
          </Typography>
        </Box>

        <List>
          {
            menuItems.map(( text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  { index % 2 ? <MoveToInboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            ))
          }
        </List>
        <Divider />

        <List>
          {
            menuItems.map(( text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  { index % 2 ? <MoveToInboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            ))
          }
        </List>
        <Divider />
      </Box>


    </Drawer>
  )
}

export default Sidebar