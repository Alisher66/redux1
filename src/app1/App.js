import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ButtonGroup from '@mui/material/ButtonGroup';




import { useSelector, useDispatch } from 'react-redux';
import { addNoteAction, deleteNoteAction, changeNoteAction } from './store/actions';
import {useRef, useState,} from 'react';


export function App() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const [text, setText] = useState("");


  const creatNote = (e) => {
    e.preventDefault()
    const note = {
      id: Date.now(),
      text
    }
    dispatch(addNoteAction(note))
    setText("");
  }

  const deleteNote = (e,note) => {
    e.preventDefault()
    dispatch(deleteNoteAction((note)))
  }
  const changeNote = (e,note) => {
    let changedNote = {
      ...note,
      text:e.target.value
    }
    dispatch(changeNoteAction(changedNote))
  }

  const renderRow = () => {
    return (
        <List>
        {notes.length>0 ?
          notes.map(note => {
            return (
              <ListItem key={note.id} sx={{width:"100%", justifyContent:"space-between"}}>
                <TextField variant="standard" onChange={(e) =>{changeNote(e,note)}} value={note.text} />
                <ButtonGroup variant="text" aria-label="text button group">
                  <Button >Edit</Button>
                  <Button onClick={(e) => {deleteNote(e,note)}}>Delete</Button>
                </ButtonGroup>
              </ListItem>
            )
          })
            : <Typography variant="h6" component="h6" > Пусто </Typography>
        }
        </List>
    );
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4" component="h4" sx={{ mb: "20px" }}>
          Добавить:
        </Typography>
        <form style={{ display: "flex", marginBottom: "20px" }} onSubmit={creatNote} >
          <TextField id="outlined-basic" sx={{ width: "80%" }} label="Text" variant="outlined" value={text} onChange={(e) => { setText(e.target.value) }} />
          <Button type="submit" variant="contained" sx={{ ml: "10px" }} >Добавить</Button>
        </form>
        {renderRow()}
      </Container>
    </>


  );
}


