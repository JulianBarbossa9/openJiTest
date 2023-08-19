import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Inbox','Started', 'Send Email', 'Drafts']


const Sidebar = () => {

  const { sideMenuOpen, closeSideMenu } = useContext(UIContext)

  return (
    <Drawer 
      anchor='left'
      open={ sideMenuOpen }
      onClose={closeSideMenu}
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