
import styles from './header.module.css'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';


const useStyles = makeStyles({
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  },
 leftToolbar: {
    marginRight: 16,
    marginLeft: -12
  },
  menuItemLast:{
    marginLeft:0,
    marginRight:60
  },
  menuItem:{
    marginLeft:0,
    marginRight:35
  },
  logo:{
    marginLeft:100,
    marginRight:30
  }
})

export default function Header({ children }) {
  const classes = useStyles()
  return (
    <AppBar position="static"  style={{ background: '#ffbf16',  "border-bottom": "2px solid black"}} >
          <Toolbar>
          <section className={classes.leftToolbar}>
            <Typography variant="h6" className="title" style={{color:"black"}}>
            <a className={classes.logo}>PermaNotes.</a>

            </Typography>
            </section>
          <section className={classes.rightToolbar}>
            <Typography  style={{color:"black"}}>
              <a className={classes.menuItem}>HOME</a>
              <a className={classes.menuItem}>OVERVIEW</a>
              <a className={classes.menuItem}>GALLERY</a>
              <a className={classes.menuItem}>NCT TOKEN</a>
              <a className={classes.menuItem}>MY WALLET</a>
              <a className={classes.menuItemLast}>WALLET HISTORY</a>
            </Typography>

          </section>

          </Toolbar>
      </AppBar>
  
    )
}