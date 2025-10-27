import styles from './Header.module.css'
import Searchbar from './Searbar/Searchbar.jsx'

export default function Header() {

  return (
    
     <div className={styles.header}>
      
      <div>
       <Searchbar />
      </div>
    </div>
  )
}


