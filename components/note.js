import styles from './note.module.css'
import { getNoteContext } from '../lib/fetch' 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const noteStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '70vh',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const inputStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

const buttonStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Note_context({children}) {
  const notestyles = noteStyles();
  const inputstyles = inputStyles();
  const buttonstyles = buttonStyles();

    const noteData = getNoteContext(1)
  return (

    


  <div className ={styles.noteMain}>
    
      <h1>
        The dream
      </h1>
    
      <List className={notestyles.root}>
        <li><ul><ListItem><ListItemText primary={`Item 1sdfffffffffffffffff但是发射点发射点发撒打发撒旦飞洒地方十大`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
        <li><ul><ListItem><ListItemText primary={`Item 1`} secondary={'Secondary text'}/></ListItem></ul></li>
      </List>

    <form className={inputstyles.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>

    <div className={buttonstyles.root}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>

  </div>
  
  )
}
