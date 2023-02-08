import React  from "react";
import logo from "./logo1.png";
import { Link } from "react-router-dom";
 import { Connect } from "react-redux";
 import { useSelector } from "react-redux";
// import './style.css'

 function Nav()   {

  const store = useSelector((state)=> state.freducer.favorit)

    return (
        
      <>
        <nav className="navbar navbar-expand-lg navbar-light  bg-warning">
  <div className="container-fluid">
 
    <Link to={"/home"}> <img src={logo} style={{width:"50px"}}  alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to={"/home"}> <a className="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            select
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
         
        </li>
       <li> <Link to={"/favorit"}><i class="fa-sharp fa-solid fa-star fs-2 text-danger"><span class="icon-count">{store.length}</span></i></Link></li>
      </ul>

    </div>
  </div>
</nav>


      </>
        
    )
}
// const favestar = (state) => {
//   return {
//     totalfave= state.
//   }
// }
export default Nav