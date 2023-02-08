import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Card from "./card"


function Show() {

    // console.log(useParams())
    const [showmovie, setShow] = useState({})
    const params = useParams()
    const Cid = params.id
    console.log(params.id)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${Cid}?api_key=9b743af1d4fde1d65af33c40dcccce87`)
        .then((movies) => setShow(movies.data))
        .catch((err) => console.log(err))
    },[])
    


    return(
        <div className="container-fluid">   
            
        <div className="hello position-relative" >
            
             <span id="word" className="p-5 text-warning">migo movie</span><br></br>
        <span className="word p-5 ">movie4U</span>

        <button type="button" id="btn" className=" btn-outline-warning m-5 btn  position-absolute top-50 start-0 translate-middle-y">Contact me</button>

        </div>
        <div className="row">
        <div className="col-4 mt-5">
        <Card image={showmovie.poster_path}  desc={showmovie.original_title} title={showmovie.title} />
        </div>
        <div className="col-8 ">
            <h1 className="text-warning p-5 m-4 ">{showmovie.title}</h1>
        <p className="text-white fs-1 p-5">{showmovie.overview}</p> <br />
        <span className="text-info fs-3 p-5">{showmovie.release_date}</span>
        </div>
        </div>
        </div>
    )
}


export default Show