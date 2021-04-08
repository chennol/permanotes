import Link from 'next/link'
import styles from './note.module.css'
import { getNoteContext } from '../lib/fetch'


export default function Note_context({children}) {
    const noteData = getNoteContext()
  return (
  <div>
            <h1>{noteData}
            </h1>
            
  </div>
  
  )
}
