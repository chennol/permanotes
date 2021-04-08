
import styles from './footer.module.css'
import Button from '@material-ui/core/Button';




export default function Footer({ children }) {
  return (
    <div className = {styles.footerstyle}>
        <Button variant="contained" color="primary">
      你好，世界
    </Button>
        <a>
            Powered by Our Memory
        </a>
    </div>
    )
}