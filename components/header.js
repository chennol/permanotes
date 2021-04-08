
import styles from './header.module.css'

export default function Header({ children }) {
  return (
    <div className = {styles.headerstyle}>
        <a> Header menu </a>
    </div>
    )
}