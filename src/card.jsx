import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {addfavorit } from "./store/Action"
import {AiTwotoneStar ,AiOutlineStar} from "react-icons/ai"
import { useState } from "react";
import { Link } from "react-router-dom";





// if(myCards.some(a=>a === props.Id)){
    //     let myC = myCards.filter(a=>a !== props.Id)
    //     dispatch(increamentCards([...myC]))
    //     //////////////////////////////////////////
    //     let myB = myObjects.filter(a=>a.id !== props.Id)
    //     dispatchObject(increamentobject([...myB]))
    // }else{
    //   dispatch(increamentCards([...myCards ,props.Id]))
    //   dispatchObject(increamentobject([...myObjects ,props.object]))
    // }


 function Card(props)   {

     const [star,setStar] = useState(props.bool)

  const store = useSelector((state)=> state.freducer.favorit)
  console.log(store)
  const dispach = useDispatch()

  const favstar = () => {
    if(  store.some(a=>a === props.id)){
      let notadd = store.filter(a=>a !== props.id)
      dispach(addfavorit([...notadd]))


    }

    else{
  dispach(addfavorit([...store,props.id]))

}
star   ? setStar(false) : setStar(true)
}

//"fa-regular" ? "fa-solid" : "fa-regular"




    return (


<div className=" card "  >
<img
          src={`https://image.tmdb.org/t/p/w500/${props.image}`} 
          alt="Movie"
        />

    <div className="card-body text-center bg-dark" style={{height:"300px"}}> 
       
   <Link to={`/show/${props.id}`}>    <button className="bg-info border-4 border-info w-50 text-center fs-5 rounded" >{props.title}</button></Link>
      <p className="card-text text-white pt-3 ">{props.desc}</p>
      <div className="fs-1"> { star  ?  <AiTwotoneStar className="text-warning fs-1 "  />  : <AiOutlineStar className="text-warning fs-1 "  /> }</div>
      <button className="bg-warning rounded "  onClick={() => favstar()}> <i className={`${store} fs-1`}>ADD</i></button> <br />

    </div>
  </div>



        )
    }
    
    export default Card