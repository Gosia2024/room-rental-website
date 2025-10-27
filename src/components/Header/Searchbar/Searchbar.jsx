export default function Searchbar(){
    const styles = { borderRadius: 8}
    return (

        <>
         <input 
         placeholder='Szukaj...' 
        style={styles}
        className =""
        />
        <button className="btn btn-primary">Szukaj</button>
       </>

    )
}