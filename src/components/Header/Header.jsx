import styles from './Header.module.css'

export default function Header() {

  return (
    
     <div className={styles.header}>
      
      <div>
        <input placeholder='Szukaj...' 
        style={{borderRadius: 8}}
        />
        <button>Szukaj</button>
      </div>
    </div>
  )
}


