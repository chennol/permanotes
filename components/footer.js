
import styles from './footer.module.css'
import Button from '@material-ui/core/Button';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from 'next/link'




export default function Footer() {

  const useStyles = makeStyles((theme) => ({
    footer: {
      
      padding: theme.spacing(3, 2),
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
  }));

  const classes = useStyles();
  return (
    <div className = {styles.footerstyle}>
      <footer className = {classes.footer}>
      <Container maxWidth="sm"> 
      <Typography variant="body2" color="textSecondary">
          <Link color="inherit" href="">
            Terms and Conditions 
          </Link>{' | '}
          <Link color="inherit" href="">
            FAQ
          </Link>{' | '}
          <Link color="inherit" href="">
            Disclamer
          </Link>
          <Copyright />
          </Typography>
        </Container> 
      </footer>
      </div>
    )
}


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Powered by Our Memory'}
    </Typography>
  );
}