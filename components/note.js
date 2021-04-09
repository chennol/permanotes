import Link from 'next/link'
import styles from './note.module.css'
import { getNoteContext } from '../lib/fetch'


export default function Note_context({children}) {
    const noteData = getNoteContext(1)
    const noteData1 = getNoteContext(2)
    const noteData2 = getNoteContext(3)
    const noteData3 = getNoteContext(4)
    const noteData4 = getNoteContext(5)
    var noteData5 = new getNoteContext(6)
  return (
  <div className ={styles.noteMain}>
            <h1>{noteData}
            </h1>
            <h1>{noteData1}
            </h1>
            <h1>{noteData2}
            </h1>
            <h1>{noteData3}
            </h1>
            <h1>{noteData4}
            </h1>
            <h1>{noteData5.string}
            </h1>
            
            
  </div>
  
  )
}
