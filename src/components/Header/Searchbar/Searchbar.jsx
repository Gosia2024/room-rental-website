export default function Searchbar(){
    const styles = { borderRadius: 8, marginRight: 5}
    return (

        <div className="d-flex">
         <input 
         placeholder='Szukaj...' 
        style={styles}
        className ="form-control"
        />
        <button className="btn btn-primary">Szukaj</button>
       </div>

    )
}