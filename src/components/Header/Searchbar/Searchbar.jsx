
import { useState } from "react";
export default function Searchbar(){
    //useState
    const [value, setValue] = useState('')
    const styles = { borderRadius: 8, marginRight: 5}

     const onSearch = ()=> {
        console.log('szukaj')
     }
     const onChange = (e) => {
        console.log(e)
        setValue(e.target.value);
        console.log('szukaj', value)
        
     }
    return (

        <div className="d-flex">
         <input 
         placeholder='Szukaj...' 
        style={styles}
        className ="form-control"
        value={value}
        onChange={onChange}
        />
       <button type="button" className="btn btn-primary" onClick={onSearch}>Szukaj</button>

       </div>

    )
}