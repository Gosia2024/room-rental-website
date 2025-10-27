import styles from './Header.module.css'
import Searchbar from './Searchbar/Searchbar.jsx'

export default function Header() {

  return (
    
     <div className={styles.header}>
      
      <div>
       <Searchbar />
      </div>
    </div>
  )
}


