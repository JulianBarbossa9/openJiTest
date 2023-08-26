import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

const NewEntry = () => {



  const [ inputValue, setinputValue ] = useState('')
  const [ touched, setTouched ] = useState(false)

  // This is the way that you call a context
  const { addNewEntry } = useContext(EntriesContext)
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

  const hancleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setinputValue(event.target.value)
  }

  const handleSave = () => {
    if ( inputValue.length === 0) return 0
    console.log({ inputValue })
    // addNewEntry
    addNewEntry(inputValue)
    setIsAddingEntry(false)
    setTouched(false)
    setinputValue('')
  }

  return (

    <Box sx={{ marginBottom: 2, paddingX: 1 }}>

      {
        isAddingEntry ? (
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
                onClick={() => setIsAddingEntry(!isAddingEntry)}
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
            onClick={() => setIsAddingEntry(!isAddingEntry)}
          >
            Add new task
          </Button>
        )
      }
    </Box>
  );
};

export default NewEntry;
