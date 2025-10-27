import styles from "./Hotel.module.css";
import hotelImg from '../../../assets/images/foto_1.png'
console.log(hotelImg)

export default function Hotel(){
    return <div className={styles.hotel}>
    <img src={hotelImg} alt='' className='img-fluid'/>
    Hotel
    </div>
}