
import { useState ,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Home from "./Home"
import Card from "./card"


const Favourite = ()=>{

const mstore = useSelector((state) => state.Add.favorit)
const onstore = useSelector((state)=> state.freducer.favorit)
  
console.log()


    return(
        <div className="fovourite">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                    {
                        mstore.map((movie,i)=>{

                            return(

                            <Card image={movie.poster_path} bool={onstore.some(a=>a === movie.id) ? true : false } Id={movie.id} object={movie}  vote={movie.vote_average} key={i} title={movie.title} />

                            )
                        })
                    }
                    </div>
                    </div>
            </div>
        </div>
    )

}
export default Favourite