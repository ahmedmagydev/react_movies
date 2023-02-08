import React  from "react";
import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./card";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function Home() {
    const store = useSelector((state)=> state.freducer.favorit)


    const [movies, setmovies] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87")
        .then((info) => setmovies(info.data.results))
        
        
        // .catch((err) => console.log(err))

    },[])

// ===============================================


const [search, setSearch] = useState("a")

useEffect(() => {
    axios.get("https://api.themoviedb.org/3/search/movie",{
        params: {
            query: search,
            api_key: "9b743af1d4fde1d65af33c40dcccce87"
        }
    })
    .then((info) => setmovies(info.data.results))
    
    
    // .catch((err) => console.log(err))

},[search])
    // console.log(info.data)



const filter = (e)=> {
    setSearch(e.target.value)
}

        return (
            <>
             <div className="container-fluid"> 
             <div className="d-flex flex-row-reverse">  
             <input className="form-control me-2 w-25 " type="search" placeholder="Search" onChange={(e)=> filter(e)}  aria-label="Search"/>

             </div>
            <div className="hello position-relative" >
            

                 <span id="word" className="p-5 text-warning">migo movie </span><br></br>
            <span className="word p-5 ">movie4U</span>
            
            
            <button type="button" id="btn" className=" btn-outline-warning m-5 btn  position-absolute top-50 start-0 translate-middle-y">Contact me</button>

            </div>

            

            
<div className="row ">
    

{movies.map((movie) => {

return (
    <div className=" col-3 mt-5">


    <Card title={movie.title} object={movie} image={movie.poster_path} desc={movie.original_title} id={movie.id} bool={store.some(a=>a === movie.id) ? true : false } />      

     </div>
)   
})}

       
</div>


 </div>
<br /><br /><br />
            
        
        
        </>
        )
}
export default Home