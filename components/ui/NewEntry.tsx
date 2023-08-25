import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "../../context/entries";

const NewEntry = () => {

  const [ addNewTask, setAddNewTask ] = useState(false)
  const [ inputValue, setinputValue ] = useState('')
  const [ touched, setTouched ] = useState(false)

  // This is the way that you call a context
  const { addNewEntry } = useContext(EntriesContext)

  const hancleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setinputValue(event.target.value)
  }

  const handleSave = () => {
    if ( inputValue.length === 0) return 0
    console.log({ inputValue })
    // addNewEntry
    addNewEntry(inputValue)
    setAddNewTask(false)
    setTouched(false)
    setinputValue('')
  }

  return (

    <Box sx={{ marginBottom: 2, paddingX: 1 }}>

      {
        addNewTask ? (
          <>
            <TextField
              fullWidth
              sx={{ marginTop: 2, marginBottom: 1 }}
              autoFocus
              multiline
              label="New Entry"
              //
              value={ inputValue }
              onChange={ hancleChange }
              //
              error={ inputValue.length <= 0 && touched}
              helperText={inputValue.length <= 0 && touched && 'Type new task'}
              onBlur={() => setTouched(!touched)}
            />

            <Box display="flex" justifyContent=" space-between">
              <Button 
                variant="text"
                onClick={() => setAddNewTask(!addNewTask)}
              >
                Delete
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                endIcon={<SaveOutlinedIcon />}
                onClick={ () => handleSave()}
              >
                Save
              </Button>
            </Box>
          </>
        ) : (
          <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            fullWidth
            variant="outlined"
            onClick={() => setAddNewTask(!addNewTask)}
          >
            Add new task
          </Button>
        )
      }
    </Box>
  );
};

export default NewEntry;
